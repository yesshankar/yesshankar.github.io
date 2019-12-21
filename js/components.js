Vue.component("project-card", {
  props: ["project"],
  template: `
   <div class="w3-card-4">
      <a
      :href="project.href"
      target="_blank"
      >
         <img
            class="w3-image"
            :src="project.src"
            alt="project thubnail"
         />
         <h3>{{ project.title }}</h3>
         <p>{{ project.summary }}</p>
         <p>
            Technology Used:
            <span v-for="tech in project.techs" class="w3-tag w3-theme">{{ tech }}</span>
            
         </p>
      </a>
   </div>
   `
});
