<template>
  <html>
  <head>
    <title>Autism Planner</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
  </head>
  <body>
    <div id="app" data-role="mainview" data-v-app="">
      <Tabs title="Today">
      </Tabs>
      <Content>
      </Content>
    </div>
  </body>
  </html>

</template>

<script>
import Tabs from './components/Tabs.vue'
import Content from './components/Content.vue'

export default {
  name: 'Autism Planner',
  components: {
    Tabs,
    Content
  }
}
</script>

<style>
* {
  outline: none;
}

html,
body,
div,
span,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
section,
summary,
time,
audio,
video {
  padding: 0;
  margin: 0;
  border: 0;
}

ul {
  list-style: none;
}


html, body,
[data-role="mainview"],
[data-role="content"] {
  position: relative;
  width: 100%;
  min-height: 100%;
}

body {
  background: #ededed;
  font-family: "Ubuntu";
  font-weight: normal;
  color: #787878;
}

[data-role="content"] {
  background: #ededed;
  border-top: 1px solid #f0f0f0;
  font-size: 1rem "Ubuntu";
  min-height: calc(100% - 75px);
  color: #787878;
}

[data-role="content"] p {
  font: 0.9rem "Ubuntu";
  color: #787878;
  line-height: 1.33;
}

[data-role="content"] h1,
[data-role="content"] h2,
[data-role="content"] h3 {
  color: #747278;
  font: 1.3rem "Ubuntu";
  font-weight: 300;
  line-height: 1.5;
}

[data-role="content"] h2 {
  font-size: 1.1rem;
  line-height: 1.4;
}

[data-role="content"] h3 {
  font-size: 0.9rem;
  line-height: 1.3;
}

[data-role="content"] img {
  margin: 0 auto;
  max-width: 98%;
}

.inset {
  margin-bottom: 10px;
  margin-top: 10px;
  clear: both;
  overflow: hidden;
}

/**
   To be factored out
  */
.xlarge-font {
  font-size: 33px;
  line-height: 1.3;
}

.large-font {
  font-size: 20px;
  line-height: 1.3;
}

.medium-font {
  width: 100px;
  display: inline-block;
  font-size: 14px;
  line-height: 1.3;
}

.small-font {
  font-size: 12px;
  line-height: 1.3;
}

.xsmall-font {
  font-size: 10px;
  line-height: 1.3;
}

.xxsmall-font {
  font-size: 8px;
  line-height: 1.3;
}

[data-role="button"] {
  -webkit-box-shadow: 0 2px 2px rgba(100, 100, 100, 0.4) inset;
  box-shadow: 0 2px 2px rgba(100, 100, 100, 0.4) inset;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: inline-block;
  min-width: 92px;
  height: 35px;
  line-height: 27px;
  padding: 4px 10px;
  background: #dd4814;
  border: none;
  border-radius: 9px/7px;
  color: #ffffff;
  font-family: "Ubuntu";
  font-size: 1rem;
  overflow: hidden;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-overflow: ellipsis;
  -webkit-transition: box-shadow 0.175s;
  -moz-transition: box-shadow 0.175s;
  -o-transition: box-shadow 0.175s;
  transition: box-shadow 0.175s;
  vertical-align: middle;
  white-space: nowrap;
}
[data-role="button"].positive {
  background: #38b44a;
  color: #ffffff;
  border-color: #38b44a;
}
[data-role="button"].information {
  background: #2ab7ec;
  color: #ffffff;
  border-color: #2ab7ec;
}
[data-role="button"].secondary {
  background: #ffffff;
  color: #888888;
}
[data-role="button"].negative {
  background: #ABA59F;
  color: #ffffff;
  border-color: #ABA59F;
}
[data-role="button"].disabled {
  color: rgba(255, 255, 255, 0.5);
}
[data-role="button"]:not(.disabled):active {
  -webkit-box-shadow: 0 3px 3px rgba(0, 0, 0, 0.4) inset, 0 0 200px rgba(0, 0, 0, 0.15) inset;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.4) inset, 0 0 200px rgba(0, 0, 0, 0.15) inset;
}
[data-role="button"] + [data-role="button"] {
  margin-left: 15px;
}
[data-role="button"] [data-role="icon"] {
  display: inline-block;
  height: 100%;
  vertical-align: top;
  -webkit-filter: brightness(2);
  filter: brightness(2);
}
[data-role="button"].icon-left [data-role="icon"] {
  float: left;
  margin-right: 5px;
}
[data-role="button"].icon-right [data-role="icon"] {
  float: right;
  margin-left: 5px;
}
[data-role="button"].disabled [data-role="icon"] {
  opacity: 0.5;
}

.space {
  margin: 10px;
}

</style>
