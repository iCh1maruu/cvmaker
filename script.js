$(document).ready(function() {
  let workItem = `<div class="workItem">
  <div class="mb-3">
    <div class="form-group">
      <span class="form-text">Название компании</span>
      <input type="text" name="companyName" class="form-control" >
    </div>
    <div class="form-group">
      <span class="form-text">Специальность</span>
      <input type="text" name="specialization" class="form-control" >
    </div>
    <div class="form-group periodWork">
      <span class="form-text">Период работы</span><br>
      <input type="date" name="workDateFrom" class="form-control">
      <input type="date" name="workDateTo" class="form-control" style="" >
    </div>
  </div>
  <button id="removeThisWork" type="button" class="btn btn-light">
    <i class='bi bi-trash' style="color: black;"></i>
  </button><br><br>
  </div>`

  let eduItem = `<div class="eduItem">
    <div class="mb-3">
      <div class="form-group">
        <span class="form-text">Название учебного заведения</span>
        <input type="text" name="uniName" placeholder="Введите название" class="form-control" >
      </div>
      
      <div class="form-group" style="margin-top: 1.3em;">
        <label for="ageSelect">Выберите степень образования</label>
        <select class="form-control" id="eduLevelSelect" style="margin-top: 0.6em;">
          <option value hidden>Степень</option>
          <option value="Bachelor">Бакалавр</option>
          <option value="school">Среднее образование</option>
          <option value="college">Колледж</option>
          <option value="master">Магистратура</option>
          <option value="phd">PhD</option>
        </select>
      </div>

      <div class="form-group">
        <span class="form-text">Название учебного заведения</span>
        <input type="text" name="uniName" placeholder="Введите название" class="form-control" >
      </div>
      
      <div class="form-group periodEdu">
        <span class="form-text">Период учёбы</span><br>
        <input type="number" name="eduDateFrom" placeholder="Год начала" class="form-control" >

        <input type="number" name="eduDateTo" placeholder="Год окончания" class="form-control" >
      </div>
    </div>
    <button id="removeThisEdu" type="button" class="btn btn-light">
    <i class='bi bi-trash' style="color: black;"></i>
  </button><br><br>
  </div>`


  $("#addMoreWork").click(function () {
    $('.work-container').append(workItem);

    $('.workItem').on('click', '#removeThisWork', function(e){
      e.preventDefault();
      $(this).parent('div').remove();
    })
  })

  $("#addMoreEdu").click(function () {
    $('.education-container').append(eduItem);

    $('.eduItem').on('click', '#removeThisEdu', function(e){
      e.preventDefault();
      $(this).parent('div').remove();
    })
  })
  
    

})