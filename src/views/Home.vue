  <template>
    <div class="bg-grey-lighter min-h-screen flex flex-col">
      <div  class="container max-w-sm mx-auto  flex flex-col items-center justify-center px-2 mt-8">
        <div v-if="!connected" class="bg-white px-6 py-8 rounded shadow-md text-black w-full">

          <h1 class="mb-8 text-3xl text-center">Sign up</h1>
          <input
                  type="text"
                  class="block border border-grey-light w-full p-3 rounded mb-4"
                  name="username"
                  placeholder="Name"
                  v-model="user.username"
          />

          <input
                  type="text"
                  class="block border border-grey-light w-full p-3 rounded mb-4"
                  name="email"
                  placeholder="Email"
                  v-model="user.email"
          />

          <input
                  type="password"
                  class="block border border-grey-light w-full p-3 rounded mb-4"
                  name="password"
                  placeholder="Password"
                  v-model="user.password"
          />

          <button
                  type="submit"
                  class="w-full text-center py-3 rounded bg-blue-700 text-white focus:outline-none my-1"
                  @click.prevent="signUp"
          >Create Account</button>


        </div>

        <div v-else class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h3>
              Welcome {{ user.username }}
            </h3>
        </div>


      </div>
    </div>
  </template>

<script>
// @ is an alias to /src

import axios from 'axios'

export default {
  name: 'Home',

  data(){
    return{
      user:{
        email: "",
        password: "",
        username: ""
      },
      connected: false,
    }
  },

  methods: {
    signUp(){
      axios.post('http://localhost:8080/auth/signup', this.user).then(response => {
        console.log(response.data.msg)
        this.$snotify.success(response.data.msg);
        this.connected = true

      }).catch( (error) => {
          this.$snotify.error(error.response.data.msg);
      })
    }
  }
}
</script>

