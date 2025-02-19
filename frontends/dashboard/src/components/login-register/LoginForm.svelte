<script lang="ts">
  import { slide } from 'svelte/transition'
  import { handleLogin } from '$util/database'

  export let isSignUpView: boolean = true

  // Set up the variables to hold the form information
  let email: string = ''
  let password: string = ''
  let formError: string = ''

  // Disable the form button until all fields are filled out
  let isFormButtonDisabled: boolean = true
  $: isFormButtonDisabled = email.length === 0 || password.length === 0

  let isButtonLoading: boolean = false

  // Toggle between registration and login forms
  const handleLoginClick = () => {
    isSignUpView = !isSignUpView
  }

  // Handle the form submission
  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault()
    isFormButtonDisabled = true
    isButtonLoading = true

    await handleLogin(email, password, (error) => {
      formError = error
    })

    isFormButtonDisabled = false
    isButtonLoading = false
  }
</script>

<form class="card-body" on:submit={handleSubmit}>
  <h2 class="font-bold text-white mb-3 text-center text-2xl">Log In</h2>

  <div class="mb-3">
    <label class="label" for="id">
      <span class="label-text">Email</span>
    </label>

    <input
      type="email"
      class="input input-bordered w-full"
      id="email"
      placeholder="name@example.com"
      autocomplete="email"
      bind:value={email}
      required
    />
  </div>

  <div class="mb-3">
    <label class="label" for="password">
      <span class="label-text">Password</span>
    </label>
    <input
      type="password"
      class="input input-bordered w-full"
      id="password"
      placeholder="Password"
      autocomplete="current-password"
      bind:value={password}
      required
    />
  </div>

  {#if formError}
    <div transition:slide class="alert alert-error mb-5">
      <i class="fa-solid fa-circle-exclamation"></i>
      <span>{formError}</span>
    </div>
  {/if}

  <div class="card-actions justify-end">
    <button
      type="submit"
      class="btn btn-primary"
      disabled={isFormButtonDisabled}
    >
      {#if isButtonLoading}
        <span class="loading loading-spinner"></span>
      {:else}
        Log In <i class="fa-solid fa-arrow-right"></i>
      {/if}
    </button>
  </div>
</form>

<div class="p-4 bg-zinc-800 text-center">
  <div class="mb-4">
    Need to Register? <button
      type="button"
      class="link font-bold"
      on:click={handleLoginClick}>Create A New Account</button
    >
  </div>

  <div>
    Forgot Your Password? <a href="login/password-reset" class="link font-bold"
      >Reset Password</a
    >
  </div>
</div>
