<script>
  export let hideLogoText = false
  export let logoWidth = 'w-24'
</script>

<div class="flex items-center justify-center gap-4">
  <img
    src="/images/pockethost-cloud-logo.jpg"
    width="450"
    height="450"
    class="mix-blend-lighten {logoWidth}"
    alt="PocketHost Logo"
  />
  <h1 class="text-white font-bold text-2xl {hideLogoText && 'sr-only'}">
    PocketHost
  </h1>
</div>
