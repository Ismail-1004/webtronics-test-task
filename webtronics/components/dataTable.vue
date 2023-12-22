<script setup>
const props = defineProps({
  tableData: {
    type: Array,
    required: true,
    default: []
  },
  labels: {
    type: Array,
    required: true,
    default: []
  },
  loading: {
    type: Boolean,
    required: false,
    default: false
  },
  enableMoreBtn: {
    type: Boolean,
    required: false,
    default: false
  },
  itemPath: {
    type: String,
    required: false,
    default: ''
  }
})

const buildLink = (id) => {
  let path = props.itemPath.replace('*', id)
  if (path[0] !== '/') path = '/' + path
  return path
}

</script>

<template>
<div>
    <el-table 
      :data="tableData" 
      style="width: 100%" 
      class="table"
      v-loading="loading"
    >
        <el-table-column prop="id" :label="label.title"
          v-for="(label, i) of labels" 
          :key="i" 
        >
          <template #default="{ row }">
            <template v-if="label.type === 'link'">
              <NuxtLink :to="label.to+row[label.key || label.prop]" class="table__link">
                {{ row[label.prop] }}
                <Icon name="ion:open-outline" />
              </NuxtLink>
            </template>
            <template v-else>
              {{ row[label.prop] }}
            </template>
          </template>
        </el-table-column>

        <el-table-column v-if="enableMoreBtn" align="right">
          <template #default="scope">
            <NuxtLink :to="buildLink(String(tableData[scope.$index].id))">
              <el-button
                size="small"
              >
                Подробнее
              </el-button>
            </NuxtLink>
          </template>
        </el-table-column>
    </el-table>
</div>
</template>

<style lang="scss" scoped>
.table {
  &__link {
    color: #409eff;
  }
}
</style>