<template>
  <div v-if="state.notes">
    <div class="col-12 d-flex space-between border" v-for="note in state.notes" :key="note.id" note:note>
      <div class="col d-flex flex-wrap space-between">
        <span>
          <img
            class="rounded-pill"
            style="height: 30px"
            :src="note.creator.picture"
            alt="nogetty"
          />
          <p>{{ note.creator.email }}</p>
        </span>
        <div class="col-12 d-flex space-between ">
          <span><!-- v-if="note.creator.id === state.user.id"> -->
            <i class="fa fa-edit text-primary mx-1" @click="state.activeNoteEdit = note.id" aria-hidden="true"></i>
          </span>
          {{ note.body }}
          <div class="col-1">
            <span>  <!--  v-if="note.creator.id === state.user.id"> -->
              <i class="
                  fa
                  fa-trash
                  text-danger"
                 @click="deleteNote(note)"
                 aria-hidden="true"
              ></i>
            </span>
          </div>
          <div class="row">
            <div class="col-12">
              <form
                v-if="state.activeNoteEdit == note.id"
                class="card m-2 p-2 bg-danger shadow"
              >
                <div class="row">
                  <div class="col-md-12 p-3">
                    <input class="mx-2 rounded text-center p-2" v-model="state.newNote.body" />
                  </div>
                  <div class="row">
                    <div class="col-12 d-flex justify-content-center p-3">
                      <button type="submit" class="submit-edit mx-3 btn btn-primary" @click="editNote(note)">
                        Submit
                      </button>
                      <button type="button" class="cancel-edit mx-3 btn btn-primary" @click="state.activeNoteEdit = ''">
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
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
      user: computed(() => AppState.user),
      activeNoteEdit: ''
    })
    return {
      state,
      async deleteNote(note) {
        if (await Notification.confirmAction('Please confirm this deletion!')) {
          notesService.deleteNote(note.id)
        }
      },
      async editNote(note) {
        notesService.editNote(note.id)
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
