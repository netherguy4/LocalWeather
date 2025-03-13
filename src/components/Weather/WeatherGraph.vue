<script setup>
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

const props = defineProps({
  labels: Array,
  datasets: Array,
  title: String,
})

ChartJS.defaults.font.family = 'Roboto'
ChartJS.defaults.font.size = 13
ChartJS.defaults.font.weight = 500
ChartJS.defaults.font.lineHeight = '150%'
ChartJS.defaults.color = '#fff'
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

let chartData = {
  labels: props.labels,
  datasets: props.datasets,
}

const chartOptions = {
  tension: 0.3,
  responsive: true,
  maintainAspectRatio: false,
  color: '#fff',
  elements: {
    point: { pointStyle: 'cirle', radius: 0, hoverRadius: 4 },
  },
  plugins: {
    legend: false,
    title: {
      display: props.title ? true : false,
      font: {
        size: 20,
        weight: 500,
      },
      text: props.title,
    },
    tooltip: {
      padding: {
        top: 10,
        left: 10,
        right: 10,
      },
      backgroundColor: 'rgba(0,0,0,0.5)',
      usePointStyle: true,
      callbacks: {
        afterTitle: function (value, index, ticks) {
          // console.log(value)
          return value[0].raw + '°C'
        },
        label: function (value, index, ticks) {
          // return ' ' + value.raw + '°C'
          return ''
        },
      },
    },
  },
  interaction: {
    mode: 'index',
    axis: 'x',
    intersect: false,
  },
  scales: {
    y: {
      grace: 1,
      border: {
        display: false,
      },
      ticks: {
        padding: 30,
        // stepSize: 0.5,
        maxTicksLimit: 6,
        callback: function (value, index, ticks) {
          return value + '°C'
        },
      },
      grid: {
        display: false,
        color: 'rgba(255,255,255,0.1)',
      },
    },
    x: {
      border: {
        display: false,
      },
      ticks: {
        padding: 10,
      },
      grid: {
        display: false,
      },
    },
  },
}
</script>

<template>
  <Line :options="chartOptions" :data="chartData" />
</template>
