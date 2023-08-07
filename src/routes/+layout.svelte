<script>
  import "../app.tw.css";
  import Navbar from "@components/Navbar.svelte";
  import Footer from "@components/Footer.svelte";
</script>

<Navbar />
<slot />
<Footer />

<svelte:head>
  <title>BlankParticle</title>
  <meta name="description" content="Welcome to the world of BlankParticle" />
</svelte:head>
