let data = [];

let $addButton = document.getElementById('addButton');
let $modalBody = document.getElementById('modalBody');

// for disabling form submissions if there are invalid fields
function validate() {
    'use strict';
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener('submit', function (event) {
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });
}


function add() {
    $modalBody.innerHTML = `
    <form class="needs-validation" novalidate>
  <div class="form-row">
    <div class="col-md-12 mb-12">
      <label for="validationCustom01">Image Url</label>
      <input type="url" class="form-control" id="validationCustom01" placeholder="https://www.gstatic.com/webp/gallery/4.sm.jpg" required>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    <div class="col-md-12 mb-12">
      <label for="validationCustom02">Name</label>
      <input type="text" class="form-control" id="validationCustom02" placeholder="Name" required>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    <div class="col-md-12 mb-12">
      <div class="form-group">
        <label for="textarea1">Notes</label>
        <textarea class="form-control" id="textarea1" rows="3" required></textarea>
      </div>
    </div>
  </div>
  
  <button id="addSubmit" class="btn btn-primary" type="submit">Submit form</button>
</form>
    `;

    validate();

    let $addSubmit = document.getElementById('addSubmit');

    $addSubmit.addEventListener('click', (e) => {
        let $imgUrl = document.getElementById('validationCustom01');
        let $name = document.getElementById('validationCustom02');
        let $notes = document.getElementById('textarea1');

        let $closeButton = document.querySelector('button[data-dismiss="modal"]')

        if ($imgUrl.value !== '' && $name.value !== '') {

            e.preventDefault();

            data[data.length] = {
                "imgUrl": `${$imgUrl.value}`,
                "Name": `${$name.value}`,
                "notes": `${$notes.value}`
            };
            $closeButton.click();
        }
    });

}

$addButton.addEventListener('click', () => {
    add();
});