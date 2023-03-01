<template>
    <div>
      <div v-if="children.length > 0">
        <child-component v-for="child in children" :key="child.id" :data="child" />
      </div>
    </div>
  </template>
  <script>
  import { reactive, toRefs } from 'vue'
  export default {
    props: {
      data: {
        type: Object,
        required: true
      }
    },
    setup(props) {
      const state = reactive({
        children: props.data.children || []
      })
      const childComponent = () => ({
        props: {
          data: {
            type: Object,
            required: true
          }
        },
        template: `
          <div>
            <div>{{ data.name }}</div>
            <child-component v-if="data.children" v-for="child in data.children" :key="child.id" :data="child" />
          </div>
        `,
        components: {
          ChildComponent: childComponent
        }
      })
      return {
        ...toRefs(state),
        childComponent
      }
    }
  }
  </script>