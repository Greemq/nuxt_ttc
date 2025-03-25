<script setup>
import {defineAsyncComponent, nextTick, onMounted, ref} from "vue";
import dayjs from "dayjs";
import "dayjs/locale/ru";
import MainDialogs from "~/components/main/MainDialogs.vue";
import MainDialogStats from "~/components/main/MainDialogStats.vue";
import MainDialogTime from "~/components/main/MainDialogTime.vue";

dayjs.locale("ru");

definePageMeta({
    layout: "base-layout",
});

const ApexChart = defineAsyncComponent(() => import("vue3-apexcharts"));

const chartKey = ref(0);

const currentValue = ref(164);
const maxValue = ref(389);

const series1 = computed(() => [(currentValue.value / maxValue.value) * 100]);

const chartOptions1 = ref({
    chart: {
        type: "radialBar"
    },
    plotOptions: {
        radialBar: {
            startAngle: 0,
            borderRadius: 50,
            endAngle: 360,
            hollow: {
                size: "75%"
            },
            dataLabels: {
                name: {
                    show: false
                },
                value: {
                    fontSize: "24px",
                    fontWeight: "bold",
                    formatter: () => `${maxValue.value}`
                }
            },
            track: {}
        },

    },
    stroke: {
        lineCap: 'round'
    },
    colors: ["#50B748"],
});

onMounted(() => {
    nextTick(() => {
        chartKey.value++;
    });
});

const socials = ref([
    {
        id: 1,
        label: 'Instagram',
        color: '#FF428A'
    },
    {
        id: 2,
        label: 'Telegram',
        color: '#1B80FC'
    },
    {
        id: 3,
        label: 'Watsapp',
        color: '#1ECD92'
    },
    {
        id: 4,
        label: 'Онлайн-чат',
        color: '#ACACAC'
    },
    {
        id: 5,
        label: 'Виджет',
        color: '#1A1B1B'
    },
    {
        id: 6,
        label: 'Wazzup',
        color: '#50B748'
    },
    {
        id: 7,
        label: 'Amo CRM',
        color: '#0C39CC'
    },
    {
        id: 8,
        label: 'Bitrix24',
        color: '#1DB5BF'
    },
    {
        id: 9,
        label: 'Google Календарь',
        color: '#EFE413'
    },

]);
const chartCheckboxModel = ref([1, 2, 4, 7]);

const xAxisCategories = computed(() => {
    const today = dayjs();
    let type = selectedFilter.value;
    if (type === 3) {
        return Array.from({length: 7}, (_, i) =>
            today.subtract(6 - i, "day").format("DD.MM")
        );
    } else if (type === 2) {
        return Array.from({length: 14}, (_, i) =>
            today.subtract(6 - i, "day").format("DD.MM")
        );
    } else {
        return Array.from({length: 30}, (_, i) =>
            today.subtract(29 - i, "day").format("DD.MM")
        );
    }
});

const chartOptions2 = computed(() => {
    const colorsMap = socials.value.reduce((acc, s) => {
        acc[s.id] = s.color;
        return acc;
    }, {});

    return {
        chart: {
            type: "bar",
            redrawOnWindowResize: false,
            stacked: true,
            toolbar: { show: false },
            tooltip: { enabled: false },
            animations: {
                enabled: true,
                speed: 600,
                easing: "bounce",
                animateGradually: {
                    enabled: false,
                    delay: 30
                },
                dynamicAnimation: {
                    enabled: false,
                    delay:600
                }
            },
            parentHeightOffset: 0,
        },
        dataLabels: {
            enabled: false
        },
        plotOptions: {
            bar: {
                horizontal: false,
                borderRadius: 4,
                startingShape: "flat"
            },
        },
        legend: { show: false },
        xaxis: {
            categories: xAxisCategories.value,
            labels: {
                rotate: -60,
                rotateAlways: true
            }
        },
        tooltip: {
            enabled: false
        },
        grid: {
            padding: { left: 0, right: -10, top: 0, bottom: -20 },
        },
        fill: { opacity: 1 },
        colors: filteredSeries2.value.map(series => colorsMap[series.id] || "#000"),
    };
});

const filterTypes = ref([
    {
        id: 1,
        name: '30 дней'
    },
    {
        id: 2,
        name: '2 недели'
    },
    {
        id: 3,
        name: 'неделя'
    },
]);
const selectedFilter = ref(2);

const generateRandomData = (length) => {
    return Array.from({length}, () => Math.floor(Math.random() * 100));
};

const series2 = computed(() => {
    const daysCount = selectedFilter.value === 3 ? 7 : selectedFilter.value === 2 ? 14 : 30;

    return socials.value.map((social) => ({
        name: social.label,
        id: social.id,
        data: generateRandomData(daysCount),
    }));
});


const selectedSet = computed(() => new Set(chartCheckboxModel.value));

const filteredSeries2 = computed(() =>
    series2.value.filter(series => selectedSet.value.has(series.id))
);


const currentValue2 = ref(174);
const maxValue2 = ref(289);


const series3 = computed(() => [(currentValue2.value / maxValue2.value) * 100]);

const chartOptions3 = ref({
    chart: {
        type: "radialBar"
    },
    plotOptions: {
        radialBar: {
            startAngle: -90,
            endAngle: 90,
            track: {
                background: "#e0e0e0",
            },
            hollow: {
                size: "75%"
            },
            dataLabels: {
                name: {show: false},
                value: {
                    fontSize: "24px",
                    fontWeight: "bold",
                    show: true,
                    offsetY: 0,
                    formatter: () => `${maxValue.value}`
                }
            }
        }
    },
    stroke: {
        lineCap: "round",
        width: 8
    },
    fill: {
        type: "gradient",
        gradient: {
            shade: "dark",
            type: "horizontal",
            gradientToColors: ["#48B7A8"],
            stops: [0, 100]
        }
    },
    colors: ["#48B7A8"]
});

</script>

<template>
    <Breadcrumbs label="Главная"/>
    <div class="graphs">
        <div class="graphs_item graphs_item__short">
            <div class="graphs_item__head">
                <div class="graphs_item__head__label">Количество сообщений</div>
                <ui-select :options="[{ id: 1, name: 'option' }, { id: 2, name: 'option1' }]"/>
            </div>
            <div id="chart" class="graphs_item__chart">
                <ClientOnly>
                    <ApexChart :key="chartKey" :options="chartOptions1" :series="series1" height="200px"
                               type="radialBar"/>
                </ClientOnly>
            </div>
            <div class="flex flex-col gap-2">
                <div class="flex items-center py-1 gap-1">
                    <div class="w-3 h-3 rounded-full border-2 border-primary"></div>
                    <span class="text-gray text-sm">Новые</span>
                    <span>{{ currentValue }}</span>
                </div>
                <div class="flex items-center py-1 gap-1">
                    <div class="w-3 h-3 rounded-full border-2 border-gray"></div>
                    <span class="text-gray text-sm">Вернувшиеся</span>
                    <span>{{ maxValue - currentValue }}</span>
                </div>
            </div>
        </div>
        <div class="graphs_item graphs_item__long">
            <div class="graphs_item__head !flex-row justify-between items-center">
                <div class="graphs_item__head__label">Количество сообщений</div>
                <ui-select v-model="selectedFilter" :options="filterTypes" class="w-40"/>
            </div>
            <div class="graphs_item__checkboxes">
                <ui-checkbox v-for="item in socials"
                             v-model="chartCheckboxModel"
                             :custom-color="item.color"
                             :item="item"
                             option-label="label"/>
            </div>
            <ClientOnly>
                <ApexChart :key="'1_'+chartKey" :options="chartOptions2" :series="filteredSeries2" class="chart"
                            height="300px"
                           type=""/>
            </ClientOnly>
        </div>
        <div class="graphs_item graphs_item__short">
            <div class="graphs_item__head">
                <div class="graphs_item__head__label">Среднее количество сообщений в диалоге</div>
                <ui-select :options="[{ id: 1, name: 'option' }, { id: 2, name: 'option1' }]"/>
            </div>
            <div class="flex items-center justify-center flex-col pt-8 h-full">
                <ClientOnly>
                    <ApexChart :options="chartOptions3" :series="series3" class="grow" height="80%" type="radialBar"
                               width="240px"/>
                </ClientOnly>
                <div class="text-center text-sm text-gray">
                    На 5% меньше по сравнению с прошлым периодом
                </div>
            </div>
        </div>
    </div>
    <div class="stats">
        <MainDialogs class="stats_item lg:col-span-5"/>
        <MainDialogStats class="lg:col-span-5"/>
        <MainDialogTime class="stats_item lg:col-span-2"/>
    </div>
</template>

<style scoped>
.stats {
    @apply grid lg:grid-cols-12 gap-6 w-full md:grid-cols-1;

    &_item {
        @apply bg-white rounded-3xl p-6
    }
}

.graphs {
    @apply grid lg:grid-cols-12 gap-6 w-full md:grid-cols-1;

    &_item {
        @apply bg-white rounded-3xl p-6 flex flex-col;

        &__short {
            @apply w-full md:max-w-full lg:col-span-2;
        }

        &__long {
            @apply grow flex flex-col gap-6 lg:col-span-8;

            .chart {
                @apply min-h-[226px] max-h-[226px] h-[226px];
            }
        }

        &__head {
            @apply flex flex-col gap-4;

            &__label {
                @apply text-base font-bold;
            }

        }

        &__chart {
            @apply grow w-full flex items-center justify-center;
        }

        &__checkboxes {
            @apply grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4
        }
    }
}
</style>