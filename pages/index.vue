<template>
  <div class="main">
    <section class="cover">
      <div class="bg">
        <span class="circle first"/>
        <span class="circle second"/>
      </div>
      <div class="content">
        <h1>Удобный ввод номера телефона</h1>
        <p class="description">
          Без геморроя, проблем, часов дебага и браузерной несовместимости. <br/>Сделай ввод номера простым и удобным для клиентов с нашим компонентом.
        </p>
        <p class="links">
          <a href="https://github.com/nezavisimost/phoneix">Начать юзать</a>
          <a href="https://github.com/nezavisimost/phoneix">К исходникам</a>
        </p>
      </div>
      <div class="try_it">
        <Phoneix/>
      </div>
    </section>
    <footer>
      <span><NuxtJS/></span> <span><Rocketbank/></span> <span><WhiteApfel/></span> <span><Github/></span>
    </footer>
  </div>
</template>

<script>
import NuxtLogo from "../components/NuxtLogo";
import NuxtJS from "../components/thanks/NuxtJS";
import Rocketbank from "../components/thanks/Rocketbank";
import WhiteApfel from "../components/thanks/WhiteApfel";
import Github from "../components/thanks/Github";
export default {
  components: {Github, WhiteApfel, Rocketbank, NuxtJS, NuxtLogo}
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}
a {
  text-decoration: none;
  color: inherit;
}
svg {
  box-sizing: border-box;
}
.main {
  background: #080808;
  min-height: 100vh;
  width: 100%;
  color: #c7c7c7;
}
h1 {
  color: #ffffff;
  font-size: calc(3vmin + 2vmax);
  font-weight: 500;
  display: block;
  max-width: calc(12 * 3vmin + 12 * 2vmax);
  line-height: 1.25;
  font-family: Rocketfont, Stolzl, Nexa, Montserrat, sans-serif;
}
section.cover {
  min-height: 100vh;
  margin: 0;
  padding: 0;
}
section.cover > .content {
  padding-top: 25vh;
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
section.cover > .bg > .circle {
  display: block;
  width: 85vmax;
  height: 85vmax;
  border-radius: 50%;
  background: #fff;
  opacity: .02;
  transform: translate(50%, -40%);
  position: absolute;
  top: 0; right: 0
}
section.cover > .bg > .circle.second {
  transform: translate(40%, 40%);
  opacity: .01;
  top: unset; bottom: 0; right: 0
}
section.cover > .try_it {
  position: absolute;
  bottom: 50vh;
  right: calc(4vmin + 2vmax);
  font-size: 3em;
  font-weight: 700;
}
section.cover > .content > .description {
  font-size: calc(1vmin + .75vmax);
  margin-top: 1.5em;
  max-width: calc(30vmin + 40 * .75vmax);
}
section.cover > .content > .links {
  font-size: 1.35em;
  margin-top: 3em;
  max-width: 40em;
  display: flex;
  align-items: center;
}
section.cover > .content > .links a:first-of-type {
  padding: .75em 1.5em;
  background: #333333;
  border-radius: .35em;
  color: #ffffff;
  font-weight: 500;
}
section.cover > .content > .links a:last-of-type {
  margin-left: 2em;
  transition: color .3s;
}
section.cover > .content > .links a:last-of-type:hover {
  color: #fff
}
footer {
  background: #131313;
  padding: 2em;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  color: #696969;
  flex-wrap: wrap;
}
@media (max-width: 1300px) {
  section.cover {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  section.cover > .try_it {
    position: static;
    width: 100%;
    font-size: 7vmin;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  h1 {
    font-size: calc(4vmin + 2vmax);
  }
  section.cover > .content {
    position: relative;
    padding: 1em;
  }
  section.cover > .bg > .circle {
    width: 95vh;
    height: 95vh;
    top: unset;
    bottom: 0;
    transform: translate(60%, 40%);
  }
  section.cover > .bg > .circle.second {
    width: 65vh;
    height: 65vh;
    transform: translate(-20%, 40%);
  }
}
@media (max-width: 500px) {
  section.cover > .content > .description {
    font-size: 1em;
  }
  section.cover > .content > .links {
    font-size: 4.5vmin;
  }
}
</style>
