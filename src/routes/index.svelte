<script context="module">
  export const load = async ({fetch}) => {
    const dbRes = await fetch('/api/db');
    const data = await dbRes.json();
    return {
      props: {
        data
      }
    }
  }
</script>
<script lang="ts">
  export let data: Array<Team>;
  // console.log(data);
  const getPokeImgUrl =async (pokemonId) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    const data = await res.json();
    console.log(data);
    return data;
  }
</script>
<!-- reference for async: -->
<!-- https://svelte.dev/repl/70e61d6cc91345cdaca2db9b7077a941?version=3.44.3 -->

<section class="container">
  {#each data as team}
  <hr>
  <div class="team-title">Team {team.teamName}</div>  
  <div class="members">
    {#each team.teamMembers as member}
      <div class="indiv-member">
        <h3>{member.pokemonName}</h3>
        {#await getPokeImgUrl(member.pokemonId)}
          <p>...waiting</p>
        {:then data}
          <img src="{data.sprites.front_default}" alt="">
        {:catch error}
          <p>An error occurred!</p>
        {/await}      
      </div>      
    {/each}
  </div>
  {/each}  
</section>


<style>

  .container {
    margin: 0 auto;
    width: 100%;
  }
  .team-title {
    text-align: center;
    color: darkcyan;
    margin: 0 auto;
    font-size: 30px;
    font-weight: bold;
  }
  .members {
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    justify-content: space-evenly;
    margin: 20px auto;
  }
</style>