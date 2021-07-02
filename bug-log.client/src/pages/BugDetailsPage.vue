<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <button
          class="btn btn-danger"
          @click="deleteBug()"
        >
          Del (close it)
        </button>
        <div class="col d-flex m-auto w-100 mr-5 pr-5">
          <div class="col d-flex">
            <div
              v-if="activeBug"
              class="card mt-5"
              style="max-width: 560px;"
            >
            </div>
            <div class="row">
              <div class="col">
                <div
                  v-if="activeBug.creatorId"
                  class="col-md-12 my-5"
                >
                  <div class="card mb-3" style="max-width: 540px;">
                    <div class="row g-0">
                      <div class="col-12">
                        <img :src="activeBug.creator.picture" class="rounded-pill py-2" alt="nogetty">
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <h5 class="card-title">
                            {{ activeBug.title }}
                          </h5>
                          <p class="card-text">
                            {{ activeBug.description }}
                          </p><p>
                            {{ activeBug.creatorId.email }}
                          </p>
                          Status:<p>
                            {{ (activeBug.closed == true) ? "Closed" : "Open" }}
                          </p>
                          <p class="card-text">
                            <small class="text-muted">
                              <p> created:
                                <small class="text-muted">
                                  {{ activeBug.createdAt.split('T')[0].split('-').splice(1,2)[0] }}
                                  {{ activeBug.createdAt.split('T')[0].split('-').splice(1,2)[1] }}
                                  {{ (activeBug.createdAt.split('T')[0].split('-').splice(0,1))[0] }}</small>
                              </p>
                              <p>
                                updated:
                                <small class="text-muted">
                                  {{ activeBug.updatedAt.split('T')[0].split('-').splice(1,2)[0] }}
                                  {{ activeBug.updatedAt.split('T')[0].split('-').splice(1,2)[1] }}
                                  {{ (activeBug.updatedAt.split('T')[0].split('-').splice(0,1))[0] }}
                                </small>
                              </p>
                            </small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <form @submit.prevent="createNote()">
                    <input class="form-control"
                           v-model="state.newNote.body"
                           required="true"
                           placeholder="add new Note"
                    />
                    <button type="submit"
                            class="btn"
                            :disabled="!state.newNote "
                            :class="{
                              'btn-primary': state.newNote.body,
                              'btn-danger': !state.newNote.body
                            }"
                    >
                      Report
                    </button>
                  </form>
                  <Notes class="col-md-6 my-5 border" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { computed, reactive, watchEffect } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { bugsService } from '../services/BugsService'
import { notesService } from '../services/NotesService'
import Notification from '../utils/Notification'

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
    // onMounted(() => { notesService.getNotes(AppState.activeBug.id) })
    watchEffect(() => {
      bugsService.getBugDetails(route.params.id)
      // notesService.getNotes(AppState.activeBug.id)
    })
    const state = reactive({
      newNote: { bug: {}, body: '' },
      notes: computed(() => AppState.notes)
    })
    return {
      state,
      async deleteNote() {
        if (await Notification.confirmAction('Please confirm this deletion!')) {
          notesService.deleteNote()
        }
      },
      bugs: computed(() => AppState.bugs),
      notes: computed(() => AppState.notes),
      activeBug: computed(() => AppState.activeBug),
      getBugDetails() {
        bugsService.getBugDetails(route.params.id)
      },
      createNote() {
        state.newNote.bug = AppState.activeBug
        notesService.createNote(state.newNote)
      },
      async deleteBug() {
        if (await Notification.confirmAction('Please confirm this deletion/Closing!')) {
          bugsService.deleteBug(route.params.id)
        }
      }
    }
  }
}
</script>
<style scoped>

</style>
