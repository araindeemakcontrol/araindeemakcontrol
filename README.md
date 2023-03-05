<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resume Generator</title>
    <link rel="stylesheet" href="/resumeGenerator/style.css">
    <!-- <link rel="stylesheet" href="/resumeGenerator/script.js"> -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">

</head>
<body>
    
    <!-- here goes html code -->
    <div class="container" style="background: #FFF1CC; border-radius: 10px;" id="cv-form">
        <h1 class="text-center my-2">Resume Generator</h1>
        <p class="text-center">By LearnCodeWith Sami</p>
        <div class="row mb-5">
            <div class="col-md-6 mt-2">
                <!-- first col -->
                <h3 class="mt-2">Personal Information</h3>
                <div class="form-group">
                    <label for="nameField">Your Name</label>
                    <input type="text" id="nameField" class="form-control" placeholder="Enter Your Name Here ...">
                </div>
                <div class="form-group mt-2">
                    <label for="contactField">Your Contact No.</label>
                    <input type="text" id="contactField" class="form-control" placeholder="Enter Your Contact No. ...">
                </div>
                <div class="form-group mt-2">
                    <label for="addressField">Your Address</label>
                    <textarea id="addressField" class="form-control" placeholder="Enter Your Address ..." rows="2"></textarea>
                </div>
                
                <div class="form-group mt-2">
                    <label for="imgField">Select Your Profile Picture</label>
                    <input id="imgField" type="file" class="form-control"/>
                </div>



                <p class="text-secondary mt-2">Important Links</p>
                <div class="form-group mt-2">
                    <label for="fbField">Facebook Link</label>
                    <input type="text" id="fbField" class="form-control" placeholder="Enter Your Facebook Link Here ...">
                </div>
                <div class="form-group mt-2">
                    <label for="instaField">Insta Link</label>
                    <input type="text" id="instaField" class="form-control" placeholder="Enter Your Instagram Link Here ...">
                </div>
                <div class="form-group mt-2 mb-2">
                    <label for="linkedField">LinkedIn Link</label>
                    <input type="text" id="linkedField" class="form-control" placeholder="Enter Your LinkedIn Link Here ...">
                </div>
            </div>
            <div class="col-md-6 mt-2">
                <!-- second col -->
                <h3>Professional Information</h3>
                <div class="form-group mt-2">
                    <label for="">Your Objective</label>
                    <textarea id="objectiveField" class="form-control" placeholder="Enter Your Objective ..." rows="5"></textarea>
                </div>

                <div class="form-group mt-2" id="we">
                    <label for="">Work Experience</label>
                    <textarea class="form-control weField" placeholder="Enter Your Work Experience ..." rows="3"></textarea>
                    <!-- new textarea -->

                    <div class="container mt-2" id="weAddButton" style="text-align: right;">
                        <button onclick="addNewWEField()" class="btn btn-primary btn-sm">Add</button>
                    </div>
                </div>

                <div class="form-group mt-2" id="aq">
                    <label for="">Qualification</label>
                    <textarea class="form-control equField" placeholder="Enter Your Qualification ..." rows="3"></textarea>
                    <!-- new textarea -->
                    <div class="container mt-2" id="aqAddButton" style="text-align: right;">
                        <button onclick="addNewAQField()" class="btn btn-primary btn-sm">Add</button>
                    </div>
                </div>
            </div>
            <div class="container text-center mt-3 mb-5">
                <button onclick="generateCV()" class="btn btn-primary btn-lg">Generate CV</button>
            </div>
        </div>
    </div> 

    <!-- cv template -->
    <div class="container" id="cv-template">
        <div class="row">
            <div class="col-md-4 text-center py-5 background">
                <!-- first column -->
                <!-- <h3>dsjdjsd</h3> -->
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0mpEAFXv-iIa50q5rA2L6nnHGy_akXDFyQQ&usqp=CAU" alt="" class="img-fluid myImg" id="imgT">

                <div class="container">
                    <p id="nameT1">Muhammad Samiullah</p>
                    <p id="contactT">+923004577782</p>
                    <p id="addressT">Faisal Town Lahore</p>
                    <hr>
                    <p><a id="fbT" href="http://www.facebook.com">http://www.facebook.com</a></p>
                    <p><a id="instaT" href="http://www.instagram.com">http://www.instagram.com</a></p>
                    <p><a id="linkedT" href="http://www.linkedin.com">http://www.linkedin.com</a></p>
                </div>

            </div>
            <div class="col-md-8 py-5">
                <!-- second column -->
                <h1 id="nameT2" style="font-weight: 900;">Muhammad Samiullah</h1>
                <h3 style="font-weight: 400;">Software Developer</h3>

                <!-- objective card -->
                <div class="card mt-4">
                    <div class="card-header" style="background: #FFF1CC;">
                        <h3>Objective</h3>
                    </div>
                    <div class="card-body">
                        <p id="objectiveT">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam adipisci magni cum soluta illum temporibus ipsum expedita, placeat facilis quos numquam inventore ea molestiae, itaque vero accusantium eos ut! Minus esse error laborum, molestias laudantium odio qui, soluta, culpa obcaecati quae est distinctio placeat eum maxime quaerat eius ex doloribus.</p>
                    </div>
                </div>

                <!-- work experience card -->
                <div class="card mt-4">
                    <div class="card-header" style="background: #FFF1CC;">
                        <h3>Work Experience</h3>
                    </div>
                    <div class="card-body">
                        <ul id="weT">
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, ad.</li>
                            <li>Velit, fuga. Corrupti fugit est quis corporis, explicabo eveniet velit!</li>
                            <li>Quis cumque quibusdam quasi maiores, architecto ipsum illo hic culpa.</li>
                        </ul>
                    </div>
                </div>

                
                <!-- academic qualification card -->
                <div class="card mt-4">
                    <div class="card-header" style="background: #FFF1CC;">
                        <h3>Academic Qualification</h3>
                    </div>
                    <div class="card-body">
                        <ul id="aqT">
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, ad.</li>
                            <li>Velit, fuga. Corrupti fugit est quis corporis, explicabo eveniet velit!</li>
                            <li>Quis cumque quibusdam quasi maiores, architecto ipsum illo hic culpa.</li>
                        </ul>
                    </div>
                </div>

                <div class="container mt-3 text-center">
                    <button onclick="printCV()" class="btn btn-lg" style="background: #FFF1CC;">Print</button>
                </div>

            </div>


        </div>
    </div>



    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
    <script src="/resumeGenerator/script.js"></script>
</body>
</html>
