<template>
  <div class="main">
    <section class="cover">
      <div class="bg">
        <span style="display: block; width: 85vmax; height: 85vmax; border-radius: 50%; background: #fff; opacity: .02; transform: translate(50%, -40%); position: absolute; top: 0; right: 0"/>
        <span style="display: block; width: 85vmax; height: 85vmax; border-radius: 50%; background: #fff; opacity: .01; transform: translate(40%, 40%); position: absolute; bottom: 0; right: 0"/>
      </div>
      <div class="try_it">
        <Phoneix/>
      </div>
      <div class="content">
        <h1>Удобный ввод номера телефона</h1>
        <p class="description">
          Без геморроя, боли, часов дебага и браузерной несовместимости. <br/>Сделайте ввод номера простым для своих клиентов с нашим компонентом.
        </p>
        <p class="links">
          <a href="https://github.com/nezavisimost/phoneix">Начать юзать</a>
          <a href="https://github.com/nezavisimost/phoneix">К исходникам</a>
        </p>
      </div>
    </section>
    <footer>
      <span>nuxtjs</span> <span>tailwindcss</span> <span>rocketbank</span> <span>артель независимость</span>
    </footer>
  </div>
</template>

<script>
export default {
}
</script>

<style>
.main {
  background: #080808;
  min-height: 100vh;
  width: 100%;
  color: #c7c7c7;
}
h1 {
  color: #ffffff;
  font-size: 4em;
  font-weight: 500;
  display: block;
  max-width: 12em;
  line-height: 1.25;
  font-family: Rocketfont, Stolzl, Nexa, Montserrat, sans-serif;
}
section.cover {
  min-height: 100vh;
  margin: 0;
  padding: 0;
}
section.cover > .content {
  padding-top: 30vh;
  padding-left: 5em;
  position: relative;
}
section.cover > .bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 0;
  height: 100%;
  overflow: hidden;
}
section.cover > .try_it {
  position: absolute;
  bottom: 50vh;
  right: 5vw;
  font-size: 3em;
}
section.cover > .content > .description {
  font-size: 1.25em;
  margin-top: 1.5em;
  max-width: 40em;
}
section.cover > .content > .links {
  font-size: 1.35em;
  margin-top: 3em;
  max-width: 40em;
}
section.cover > .content > .links a:first-of-type {
  padding: .75em 1.5em;
  background: #333333;
  border-radius: .35em;
  color: #ffffff;
}
section.cover > .content > .links a:last-of-type {
  margin-left: 2em;
}
footer {
  background: #131313;
  padding: 2em;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  color: #696969
}
</style>
