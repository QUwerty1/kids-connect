<script setup lang="ts">

const filters = {
    price: ref("any") as Ref<PriceType>,
    title: ref(""),
    age: ref("null") as Ref<"null" | number>,
    categories: ref([]) as Ref<string[]>
};

const sections: ISection[] = reactive([]);

const filteredSections = computed(() => {
    return [...sections].filter(section =>
        filterChain.every(f => f(section))
    );
})

const categories = computed(() => {
    const categories = new Map<string, string[]>();

    sections.forEach(section => {
        if (categories.has(section.category)) {
            let subcategory = categories
                .get(section.category)
                ?.find(fc => fc == section.subcategory);
            if (subcategory == undefined) {
                categories
                    .get(section.category)
                    ?.push(section.subcategory)
            }
        } else {
            categories.set(section.category, [section.subcategory]);
        }
    })

    return categories;
})

const filterCategories = computed(() => {
    const filterCategories = new Map<string, ISectionAmount>();
    categories.value.forEach((subcategories, title) => {
        filterCategories.set(title, {title, subcategories: []});
        subcategories.forEach(sub => {
            filterCategories.get(title)?.subcategories.push({title: sub, amount: 0});
        })
    })

    filteredSections.value.forEach(section => {
        let subcategory = filterCategories
            .get(section.category)
            ?.subcategories
            .find(fs => fs.title == section.subcategory);

        if (subcategory != undefined) {
            subcategory.amount++;
        }
    })

    const result: ISectionAmount[] = [];
    filterCategories.forEach(category => {
        result.push(category)
    })

    return result;
})

const sectionGroups = computed(() => {
    const sectionGroups = new Map<string, ISection[]>();
    filteredSections.value.forEach((val) => {
        if (sectionGroups.has(val.category)) {
            sectionGroups.get(val.category)?.push(val);
        } else {
            sectionGroups.set(val.category, [val]);
        }
    })

    return sectionGroups;
})

const filterChain = [
    (section: ISection) => {
        switch (filters.price.value) {
            case "any": {
                return true;
            }
            case "free": {
                return section.price == 0;
            }
            case "paid": {
                return section.price > 0;
            }
        }
    },
    (section: ISection) => {
        return section.title.toLowerCase().includes(filters.title.value.toLowerCase());
    },
    (section: ISection) => {
        if (filters.age.value == "null") {
            return true;
        }
        return filters.age.value! >= section.minAge && filters.age.value! <= section.maxAge;
    },
    (section: ISection) => {
        if (filters.categories.value.length == 0) {
            return true;
        }
        return filters.categories.value.includes(section.subcategory);
    }
]

function changePriceType(type: PriceType): void {
    filters.price.value = type;
}

onMounted(async () => {
    $fetch('/fake_sections.json')
        .then(response => {
            sections.push(...response as ISection[]);
        })
})

</script>

<template style="min-height: 100dvh">
    <container class="main-container">
        <div>
            <div style="display:flex; justify-content: space-between; margin-bottom: 20px">
                <div style="display:flex; gap: 20px">
                    <search-input v-model="filters.title.value"/>
                    <ui-chip
                        @click="changePriceType('any')"
                        class="price-chip"
                        :disabled="filters.price.value != 'any'"
                        color="white">
                        Все
                    </ui-chip>
                    <ui-chip
                        @click="changePriceType('paid')"
                        class="price-chip"
                        :disabled="filters.price.value != 'paid'"
                        color="white">
                        Платные
                    </ui-chip>
                    <ui-chip
                        @click="changePriceType('free')"
                        class="price-chip"
                        :disabled="filters.price.value != 'free'"
                        color="white">
                        Бесплатные
                    </ui-chip>
                </div>
                <ui-button style="display:flex; align-items: center;">
                    <span>На карте&nbsp;&nbsp;</span>
                    <icon style="position:relative; top:-1px" name="kc:geo"/>
                </ui-button>
            </div>
        </div>
        <div style="display:flex; gap: 40px;">
            <main style="flex-grow: 1">
                <sections-group
                    v-for="(sectionGroup, index) in sectionGroups"
                    :key="index + '_sectionGroup'"
                    :title="sectionGroup[0]"
                    :sections="sectionGroup[1]"/>
            </main>
            <aside style="width: 330px;">
                <the-filters
                    v-model:age="filters.age.value"
                    v-model:categories="filters.categories.value"
                    :section-amounts="filterCategories"/>
            </aside>
        </div>
    </container>
</template>

<style scoped>

.main-container {
    border-radius: var(--big-border-radius);
    background-color: var(--light-grey);
    padding: 40px 40px;
    margin-bottom: 40px;
}

.price-chip {
    cursor: pointer;
}

</style>