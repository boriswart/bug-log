<template>
  <div v-if="state.notes">
    <div class="col-12 d-flex space-between border" v-for="note in state.notes" :key="note.id" note:note>
      <div class="col-4 d-flex space-between">
        <img
          class="rounded-pill"
          style="height: 30px"
          :src="note.creator.picture"
          alt="nogetty"
        />
        {{ note.creator.email }}
      </div>
      <div class="col-12 d-flex space-between ">
        {{ note.body }}
        <div class="col-2">
          <span>
            <i class="fa fa-trash" @click="deleteNote(note)" aria-hidden="true"></i>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { notesService } from '../services/NotesService'
import Notification from '../utils/Notification'
import { reactive, computed } from 'vue'
import { AppState } from '../AppState.js'
import { useRoute } from 'vue-router'

export default {
  // props: { note: { type: Object, required: true } },
  // export default {
  // props: {
  //   movie: { type: Object, required: true }
  // },
  // setup(props) {
  //   return {
  //     setActiveMovie() {
  //       AppState.activeMovie = props.movie
  setup() {
    const route = useRoute()
    // onMounted(() => { notesService.getNotes() })
    // watchEffect(() => {
    //   bugsService.getBugDetails(route.params.id)
    notesService.getNotes(route.params.id)
    const state = reactive({
      newNote: { bug: {}, body: '' },
      notes: computed(() => AppState.notes),
      activeNoteEdit: ''
    })
    return {
      state,
      async deleteNote(note) {
        if (await Notification.confirmAction('Please confirm this deletion!')) {
          notesService.deleteNote(note.id)
        }
      },
      bugs: computed(() => AppState.bugs),
      notes: computed(() => AppState.notes)
    }
  }
}
</script>

<style>
.space-between{
  display: flex;
  justify-content: space-between;
}
</style>
