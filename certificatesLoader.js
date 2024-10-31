$(function () {
    const certificatesRow = $("#certificates-row");
    const certificates = window.certificates;
    const main = $("#main");
    
    for (let i = 0; i < certificates.length; i++) {
      certificatesRow.append(createCertificateTemplates(certificates[i], i));
      main.after(createCertificateModal(certificates[i], i));
    }
  });
  
  function createCertificateTemplates(data, index) {
    return `
          <div class="col-xl-4 col-12">
              <button
                class="border-0 rounded-3 h-100 w-100"
                data-bs-toggle="modal"
                data-bs-target="#modal-${index}"  
              >
                <div class="card h-100">
                  <img
                    class="card-img-top"
                    src="${data.url}"
                    alt="${data.title}"
                  />
                  <div class="card-body mt-3 p-0">
                    <p class="card-title text-center fw-bold fs-4">
                      ${data.title}
                    </p>
                  </div>
                </div>
              </button>
          </div>
      `;
  }
  
  function createCertificateModal(data, index) {
    return `
      <!--${data.title}-->
      <div
        class="modal fade"
        tabindex="-1"
        id="modal-${index}"  
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
              <img src="${data.url}" class="img-fluid" alt="${data.title}"/> <!-- Added 'img-fluid' for responsive images -->
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
  