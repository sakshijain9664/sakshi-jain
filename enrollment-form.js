function myFunction() {
  document.getElementById("formSection").classList.add("active");
  document.getElementById("previewSection").classList.remove("active");
  document.getElementById("thankyouSection").classList.remove("active");
  
}
function showPreview() {
  const Student = document.getElementById("firstName").value;
  const Email = document.getElementById("firstEmail").value;
  const DOB = document.getElementById("DOB").value;
  const Gender = document.querySelector('input[name="selectgender"]:checked')?.value || '';
  const Nationality = document.getElementById("national").value;
  const Address = document.getElementById("add").value;
  const Contact = document.getElementById("phone").value;

  const ParentName = document.getElementById("parentname").value;
  const ParentContact = document.getElementById("parentphone").value;
  const Relation = document.getElementById("relation").value;
  const EmergencyContact = document.getElementById("emergencyphone").value;

  const SchoolName = document.getElementById("SchoolName").value;
  const GraduationDate = document.getElementById("graduationdate").value;
  const Course = document.getElementById("course").value;
  const Howdidyouhearaboutus = document.getElementById("hearaboutus").value;
  const Whyareyouinterestedinourprogram = document.getElementById("interestedinprogram").value;


  
   

  if (!Student || !Email || !DOB || !Gender || !Nationality || !Address || !Contact || !ParentName ||
    !ParentContact || !Relation || !EmergencyContact || !SchoolName || !GraduationDate || !Course ||
    !Howdidyouhearaboutus || !Whyareyouinterestedinourprogram)  {
      // alert("Please fill all the fields");
        return;
    }
  
//   display in preview
  document.getElementById("pfirstName").innerText = Student;
  document.getElementById("pfirstEmail").innerText = Email;
  document.getElementById("pDOB").innerText = DOB;
  document.getElementById("pgender").innerText = Gender;
  document.getElementById("pnational").innerText = Nationality;
  document.getElementById("padd").innerText = Address;
  document.getElementById("pphone").innerText = Contact;

  document.getElementById("pparentname").innerText = ParentName;
  document.getElementById("pparentphone").innerText = ParentContact;
  document.getElementById("prelation").innerText = Relation;
  document.getElementById("pemergencyphone").innerText = EmergencyContact;

  document.getElementById("pSchoolName").innerText = SchoolName;
  document.getElementById("pgraduationdate").innerText = GraduationDate;
  document.getElementById("pcourse").innerText = Course;
  document.getElementById("phearaboutus").innerText = Howdidyouhearaboutus;
  document.getElementById("pinterestedinprogram").innerText = Whyareyouinterestedinourprogram;

// show preview details
  document.getElementById("previewSection").classList.add("active");
  console.log ("Preview Section", document.getElementById("previewSection").classList);
  document.getElementById("formSection").classList.remove("active");
  console.log ("Form Section", document.getElementById("formSection").classList);
 document.getElementById("thankyouSection").classList.remove("active");
 console.log ("Thankyou Section", document.getElementById("thankyouSection").classList);
}

 function goBack() {
      document.getElementById("previewSection").classList.remove("active");
      document.getElementById("formSection").classList.add("active");
    }

  function resetForm(){
   document.getElementById("firstName").value = "";
   document.getElementById("firstEmail").value = "";
   document.getElementById("DOB").value = "";
   document.getElementById("gender").value = "";
   document.getElementById("national").value = "";
   document.getElementById("add").value = "";
   document.getElementById("pphone").value = "";
   document.getElementById("parentname").value = "";
   document.getElementById("parentphone").value = "";
   document.getElementById("relation").value = "";
   document.getElementById("emergencyphone").value = "";
   document.getElementById("SchoolName").value = "";
   document.getElementById("graduationdate").value = "";
   document.getElementById("course").value = "";
   document.getElementById("hearaboutus").value = "";
   document.getElementById("interestedinprogram").value = ""; 
  }

  
// Generate random reference ID like ECA-A1B2C3
function generateReferenceID() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let refID = 'ECA-';
  for (let i = 0; i < 6; i++) {
    refID += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return refID;
}

// Called on submit (button)
function showThankYouSection() {
  // Hide form and preview sections
  document.getElementById("formSection").classList.remove("active");
  document.getElementById("previewSection").classList.remove("active");

  // Show thank you section
  document.getElementById("thankyouSection").classList.add("active");

  // Generate and display reference ID
  const refId = generateReferenceID();
  console.log("Reference ID: " + refId); // Debug
  document.getElementById("referenceId").textContent = refId;

  // Add to PDF content (optional)
  const pdfSection = document.getElementById("pdfContent");
  const refPara = document.createElement("p");
  refPara.innerHTML = `<strong>Reference ID:</strong> ${refId}`;
  pdfSection.appendChild(refPara);

  // Optional: call email
  if (typeof sendEmail === "function") {
    sendEmail();
  }
}



function goHome() {
            // Change this to your home page URL
            window.location.href = "enrollment-form.html";
        }


function sendEmail(){
  let parms = {
    Name   : document.getElementById("firstName").value,
    Email  : document.getElementById("firstEmail").value,
    Contact: document.getElementById("phone").value,
    Course : document.getElementById("course").value,
  }
  console.log (parms);
  emailjs.send("service_iicj78c","template_7x8g1zn",parms);
}


function getGenderValue() {
  const genderRadios = document.getElementsByName("selectgender");
  for (let i = 0; i < genderRadios.length; i++) {
    if (genderRadios[i].checked) {
      return genderRadios[i].value;
    }
  }
  return "Not selected";
}

function downloadPDF() {
  // Collect data
  document.getElementById("pdfName").innerText = document.getElementById("firstName").value;
  document.getElementById("pdfEmail").innerText = document.getElementById("firstEmail").value;
  document.getElementById("pdfDOB").innerText = document.getElementById("DOB").value;
  document.getElementById("pdfGender").innerText = getGenderValue();
  document.getElementById("pdfNationality").innerText = document.getElementById("national").value;
  document.getElementById("pdfAddress").innerText = document.getElementById("add").value;
  document.getElementById("pdfPhone").innerText = document.getElementById("phone").value;
  document.getElementById("pdfParentName").innerText = document.getElementById("parentname").value;
  document.getElementById("pdfParentPhone").innerText = document.getElementById("parentphone").value;
  document.getElementById("pdfRelation").innerText = document.getElementById("relation").value;
  document.getElementById("pdfEmergency").innerText = document.getElementById("emergencyphone").value;
  document.getElementById("pdfSchool").innerText = document.getElementById("SchoolName").value;
  document.getElementById("pdfGraduation").innerText = document.getElementById("graduationdate").value;
  document.getElementById("pdfCourse").innerText = document.getElementById("course").value;
  document.getElementById("pdfHeard").innerText = document.getElementById("hearaboutus").value;
  document.getElementById("pdfInterest").innerText = document.getElementById("interestedinprogram").value;

  // Show and generate PDF
  const element = document.getElementById("pdfContent");
  element.style.display = "block";

  html2pdf()
    .from(element)
    .set({
      margin: 10,
      filename: 'Student_Registration.pdf',
      html2canvas: { scale: 2 },
      jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4' }
    })
    .save()
    .then(() => {
      element.style.display = "none"; // Hide after download
    });
}