$(function () {
  console.log("Ready!");
  const projectRow = $("#project-row");
  const main = $("#main");
  const projects = window.projects;
  for (let i = 0; i < projects.length; i++) {
    projectRow.append(createProjectTemplate(projects[i]));
    main.after(createProjectModal(projects[i].modal));
  }
});

function createProjectTemplate(data) {
  return `
        <div class="col-xl-4 col-12 project">
            <button
              class="border-0 rounded-3 h-100"
              data-bs-toggle="modal"
              data-bs-target="${data.targetModal}"
            >
              <div class="card h-100">
                <img
                  class="card-img-top"
                  src="${data.imgSrc}"
                  alt="${data.title}"
                />
                <div class="card-body mt-3 p-0">
                  <p class="card-title text-center fw-bold fs-4">
                    ${data.title}
                  </p>
                  <p class="card-body fw-bold">
                    ${data.description}
                  </p>
                  <div class="p-3">
                    ${data.badges
                      .map(
                        (badge) =>
                          `<span class="badge rounded-pill text-bg-primary">${badge}</span>`
                      )
                      .join("")}
                  </div>
                </div>
              </div>
            </button>
          </div>
    `;
}

function createProjectModal(data) {
  console.log(data);
  return `
        <div
      class="modal fade"
      id="${data.modalId}"
      tabindex="-1"
      aria-labelledby="${data.modalId}"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5">${data.title}</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <h3
              id="${data.title}"
              class="fw-bolder mb-3"
            >
              ${data.title}
            </h3>
            <h5 class="fw-bold">Features</h5>
            <div class="p-3">
              <ul>
                ${data.features
                  .map(
                    (feature) =>
                      `<li><input type="checkbox" checked />
                        ${feature}
                      </li>
                        `
                  )
                  .join("")}
                </ul>
            </div>
            <h5 class="mb-3">Screenshots</h5>
            ${data.screenshots
              .map(
                (screenshot) => `
                    ${screenshot.images
                      .map(
                        (image) =>
                          `
                          <img
                        class="screenshot mb-2"
                        src="${image}"
                        alt=""
                        />
                          `
                      )
                      .join("")}
                    <p style="text-align: center" class="screenshot-label">
                    <strong>${screenshot.label}</strong>
                    </p>
                `
              )
              .join("")}
            ${data.footer}
            </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-success fw-bold"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    `;
}
