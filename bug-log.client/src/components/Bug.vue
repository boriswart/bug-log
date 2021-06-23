<template>
  <div v-for="bug in bugs"
       :key="bug.id"
       class="col-lg-4 listing my-3"
  >
    <div class="bg-white rounded">
      <div class="text-center">
        <!-- <router-link :to="{name: 'Bugs', params: { id: bug.id } }"> -->
        <div class="container-fluid">
          <div class="row">
            <h5 class="col-md-12">
              {{ bug.title }}
            </h5>
            <a @click="editBug(bug.id)" class="card-link primary">Edit</a>
            <a @click="deleteBug(bug.id)" class="card-link danger">Delete</a>
            <a @click="createNote(bug.id)" class="card-link primary">Add List</a>
            <a @click="deleteNote(bug.id, list.id)" class="card-link danger">Delete List</a>

            <div class="col-12 card p-3" id="list-form">
              <form @submit.prevent="createList">
                <div class="w-100 align-items-center">
                  <input type="text" class="form-control" placeholder="title" v-model="state.title">
                  <input type="text" class="form-control" placeholder="name" v-model="state.name">
                  <button type="submit"
                          class="btn"
                          :disabled="!state.title "
                          :class="{
                            'btn-primary': state.title,
                            'btn-danger': !state.name
                          }"
                  >
                    Add List
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <!-- </router-link> -->
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { useRoute } from 'vue-router'
import { bugsService } from '../services/BugsService.js'
import { notesService } from '../services/NotesService'

// import Notification from '../utils/Notification'
export default {
  // props: {
  //   bug: { type: Object, required: true }
  // },
  // setup(props) {
  setup() {
    const route = useRoute()
    // onMounted(() => notesService.getNotes(route.params.id))
    onMounted(() => bugsService.getBugs())
    const state = reactive({
      title: '',
      name: ''
    })
    return {
      state,
      async createNote() {
        AppState.currentNote = await { name: state.title, descriptiom: state.name, bugid: route.params.id }
        notesService.createNote(AppState.currentNote)
        state.title = ''
        state.name = ''
      },
      bugs: computed(() => AppState.bugs),
      Currentbug: computed(() => AppState.activeBug),
      async deleteBug() {
        await bugsService.deleteBug(route.params.id)
      }
    }
  }
}
// bugsService.updatebug(route.params.id, AppState.currentbug),
</script>

<style>
</style>
