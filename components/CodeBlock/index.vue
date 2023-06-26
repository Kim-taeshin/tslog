<template>
  <div class="code-wrap">
    <div class="code-title">{{ myTitle }}</div>
    <pre><code class="code-block">{{ myCode }}</code></pre>
  </div>
</template>

<script lang="ts">
import hljs from "highlight.js";

export default defineComponent({
  props: {
    fileName: { type: String, default: "Syntax app.py" },
    code: {
      type: String,
      default: `function():Void; 
      const app = new App();
      if(a == 3) console.log("aaaaaaa 01234")
      // 이건 주석임.
      `,
    },
  },

  setup(props) {
    const myTitle = ref(props.fileName);
    const myCode = ref(props.code);
    return {
      myCode,
      myTitle,
    };
  },

  mounted() {
    document.querySelectorAll("code").forEach((block) => {
      // hljs.highlightBlock(block);
      hljs.highlightElement(block);
    });

    // setTimeout(function () {
    //   document.querySelectorAll("code").forEach((block) => {
    //     // hljs.highlightBlock(block);
    //     hljs.highlightElement(block);
    //   });
    // }, 100);
  },
});
</script>
