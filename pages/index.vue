<template>
  <!-- BEGIN NAVBAR -->
<div class="navbar">
    <a href="#about">About</a>
    <a href="#experience">Experience</a>
    <a href="#education">Education</a>
    <a href="#skills">Skills</a>
    <a href="#contact">Contact</a>
  </div>
  <!-- END NAVBAR -->

  <div class="container">

    <!-- HEADER -->
    <div class="jumbotron">
      <div class="jumbotron-text">
        <h1>SHOLIKHUL UMAM</h1>
        <p>Teknologi Informasi Brawijaya University</p>
      </div>
      <div class="jumbotron-social">
        <ul class="ul-social">
          <li class="li-social-links">
            <a class="social" href="https://github.com/womamp" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a>
          </li>
        </ul>
      </div>
      <div id="down-arrow">
        <span><a href="#about"><i class="fa fa-chevron-down" aria-hidden="true"></i></a></span>
      </div>
    </div>
    <!-- END HEADER -->

    <!-- BEGIN ABOUT -->
    <div class="row white box-shadow">
      <div class="side-content"></div>
      <div class="main-content">
        <div class="content-header">
          <a class="anchor" name="about"></a>
          <h2>About</h2>
        </div>
        <div class="content-body">
          <p>Nama saya sholikhul umam panggilan ku adalah Umam. Saya Mahasiswa Prodi Teknologi Informasi Universitas Brawijaya. </p>
          <p>Saya memiliki hobi bermain futsal, saya sangat memiliki ketertarikan pada olahraga.</p>
        </div>
      </div>
      <div class="side-content"></div>
    </div>
    <!-- END ABOUT -->

    <!-- BEGIN EXPERIENCE -->
    <div class="row">
      <div class="side-content"></div>
      <div class="main-content">
        <div class="content-header">
          <a class="anchor" name="experience"></a>
          <h2>Experience</h2>
        </div>
        <!-- CARD #1 -->
        <div class="content-body">
          <div class="card" v-for="experience in experiences">
            <div class="card-header">
              <h4>{{experience.company}} <span class="job-title">{{experience.job_title}}</span></h4>
            </div>
            <div class="card-content">
              <p>{{ experience.description }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="side-content"></div>
    </div>
    <!-- END EXPERIENCE -->

    <!-- BEGIN EDUCATION -->
    <div class="row white box-shadow">
      <div class="side-content"></div>
      <div class="main-content">
        <div class="content-header">
          <a class="anchor" name="education"></a>
          <h2>Education</h2>
        </div>
        <div class="content-body">

          <!-- EDUCATION DATA -->
          <div class="card" v-for="education in educations">
            <div class="card-header">
              <h4>{{education.name}} <span class="job-title">{{education.date_attended}}</span></h4>
            </div>
            <div class="card-content"> 
              <p>{{ education.description }}</p>
            </div>
          </div>

        </div>
      </div>
      <div class="side-content"></div>
    </div>
    <!-- END EDUCATION -->

    <!-- BEGIN SKILLS -->
    <div class="row white box-shadow">
      <div class="side-content"></div>
      <div class="main-content">
        <div class="content-header">
          <a class="anchor" name="skills"></a>
          <h2>Skills</h2>
        </div>
        <div class="content-body">
          <ul class="ul-skills">
            <li class="li-skills" v-for="skill in skills">{{ skill }}</li>
          </ul>
        </div>
      </div>
      <div class="side-content"></div>
    </div>
    <!-- END SKILLS -->

    <!-- BEGIN FOOTER -->
    <div class="row">
      <div class="side-content"></div>
      <div class="main-content">
        <div class="content-header">
        </div>
        <div class="content-body">
          <p>Umam 2024</p>
        </div>
      </div>
      <div class="side-content"></div>
    </div>
    <!-- END FOOTER -->
  </div>
</template>
<style>
@import url("~/assets/style.css");
</style>

<script>
export default {
data(){
  return{
    // Data Personal
    skills: ["Bersosialisasi", "Team Work", "Time Manajement", "Komunikasi",],

    educations: [
      {name: "Universitas Brawijaya", date_attended:"2023 - Now", description:"Saya mahasiswa Prodi Teknologi Informasi Fakultas Vokasi Universitas Brawijaya "},
      {name: "MAN 2 KOTA KEDIRI", date_attended:"2020 - 2023", description:"Saya seorang lulusan MAN dengan jurusan IPA"}, 
    ],

    experiences: [
      {company: "Brawijaya University", job_title: " HMPSTI", description:" Jabatan: Staff Magang"},
      {company: "Brawijaya University", job_title: " Pengurus UKM Futsal", description:" Jabatan: CO divisi Inventaris "},
      {company: "Brawijaya University", job_title: " BEM Fakultas", description:" Jabatan: Staff Ahli "},
    ],

  }
}
}
</script>