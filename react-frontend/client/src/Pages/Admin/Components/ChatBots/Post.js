import React, { Component } from 'react';
import axios from 'axios';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import './ChatBots.css';
import wa from '../../../../img/wa.png';
import robot from '../../../../img/loading.gif';

pdfMake.vfs = pdfFonts.pdfMake.vfs;


class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pdfDoc: null,
      userObject: {}, // Add userObject to the state
      n1:'',
      showMessage: false,
    };
  }

  componentDidMount() {
    const { steps } = this.props;
    const { submit, name, instituteType, forschool, shift, stdcount, teacher,
      teacherQualification, tratio, schoolStaff, s_facility, FacilityOption,
      TechnologyOption, SchoolSafety, s_security, userDiscipline, userBullying, schoolParentsOptions, schoolPIOptions, schoolPCOptions,
      schoolPCVisits, schoolEmail, schoolNumber, schoolCFOptions, schoolCurriculum, schoolSPOptions, schoolPOptions, schoolHOptions, schoolMOptions,
      schoolAOptions, schoolAgeOptions, schoolAEOptions, schoolADOptions, schoolDocuments, schoolTutionFees, schoolSFOptions, schoolFeesAmount, schoolACOptions,
      sTransportOptions, schoolTRoutes, schoolRFOptions, Iwebsite, AInfo,
      forcollege,
      foruni, uLocation, utype } = steps;

    const userObject = {
      submit: submit ? submit.value : '',
      Full_Name: name ? name.value : '',
      Institute_Type: instituteType ? instituteType.value : '',
      School_Name: forschool ? forschool.value : '',
      School_Shift: shift ? shift.value : '',
      Total_Number_Of_Students_In_Your_School: stdcount ? stdcount.value : '',
      Teachers_Are_Trained_And_Selected_Through: teacher ? teacher.value : '',
      Teachers_Qualification_In_Our_School_Is: teacherQualification ? teacherQualification.value : '',
      The_Student_To_Teacher_Ratio_In_The_Classroom: tratio ? tratio.value : '',
      There_Are_Support_Staff_Such_As: schoolStaff ? schoolStaff.value : '',
      The_School_Facilities_Are_As_Follows: s_facility ? s_facility.value : '',
      Is_There_A_PlayGround_Or_Sports_Facilities: FacilityOption ? FacilityOption.value : '',
      The_Type_Of_Technologies_That_Are_Available_For_Students_Use: TechnologyOption ? TechnologyOption.value : '',
      The_School_Ensures_The_Students_Saftey_By_Having: SchoolSafety ? SchoolSafety.value : '',
      Is_There_A_School_Nurse_Or_Medical_Facilities_On_Your_School: s_security ? s_security.value : '',
      School_Policies_Regarding_Student_Behaviour_And_Discipline: userDiscipline ? userDiscipline.value : '',
      The_Bullying_And_Disciplinary_Issues_Are_Addressed: userBullying ? userBullying.value : '',
      Parents_Are_Informed_About_Their_Childs_Progress_And_School_Events_By: schoolParentsOptions ? schoolParentsOptions.value : '',
      Parents_Are_Involved_In_School_Activities_Or_Committees_By: schoolPIOptions ? schoolPIOptions.value : '',
      Parents_Can_Communicate_With_Teachers_And_The_School_Through: schoolPCOptions ? schoolPCOptions.value : '',
      School_Location_Is: schoolPCVisits ? schoolPCVisits.value : '',
      School_Email_Adress_Is: schoolEmail ? schoolEmail.value : '',
      School_Contact_Number_Is: schoolNumber ? schoolNumber.value : '',
      The_Curriculum_Followed_By_The_School_Is: schoolCFOptions ? schoolCFOptions.value : '',
      The_Curriculum_Followed_By_The_School_Is: schoolCurriculum ? schoolCurriculum.value : '',
      There_Are_Special_Programs_And_Extracurricular_Activities_Like: schoolSPOptions ? schoolSPOptions.value : '',
      The_Subjects_That_Are_Offered_In_Our_School_Are: schoolPOptions ? schoolPOptions.value : '',
      Students_In_Our_School_Recieve_About: schoolHOptions ? schoolHOptions.value : '',
      Are_There_Parent_Teacher_Conferences_And_Progress_Reports: schoolMOptions ? schoolMOptions.value : '',
      Procedure_To_Take_Admission_In_School_Is: schoolAOptions ? schoolAOptions.value : '',
      Age_Requirement_For_Admission_To_Preschool_Or_Kindergarden: schoolAgeOptions ? schoolAgeOptions.value : '',
      Will_There_Be_Entrance_Exams_Or_Interviews_For_Admission: schoolAEOptions ? schoolAEOptions.value : '',
      The_Documents_That_Are_Required_For_Enrollment: schoolADOptions ? schoolADOptions.value : '',
      Enrollment_Documents_Are: schoolDocuments ? schoolDocuments.value : '',
      The_Tuition_Fees_And_Other_Expenses_Of_Your_School_Is: schoolTutionFees ? schoolTutionFees.value : '',
      Are_There_Any_Scholarships_Or_Financial_Aids: schoolSFOptions ? schoolSFOptions.value : '',
      Your_School_Fees_Is: schoolFeesAmount ? schoolFeesAmount.value : '',
      Are_There_Any_Additional_Costs_For_Uniforms_Or_School_Suppliers: schoolACOptions ? schoolACOptions.value : '',
      Does_The_School_Provide_Any_Transportation_Services: sTransportOptions ? sTransportOptions.value : '',
      The_Routes_For_Buses_Are: schoolTRoutes ? schoolTRoutes.value : '',
      Is_The_Transportation_Included_In_The_School_Fees: schoolRFOptions ? schoolRFOptions.value : '',
      School_Website_Is: Iwebsite ? Iwebsite.value : '',
      Other_Information: AInfo ? AInfo.value : '',
      College_Name: forcollege ? forcollege.value : '',
      University_Name: foruni ? foruni.value : '',
      University_Location: uLocation ? uLocation.value : '',
      University_Location: utype ? utype.value : '',
    };

    this.generatePDF(userObject);
  }

  setN1Value = (value) => {
    this.setState({ n1: value });
  };

  generatePDF = (userObject) => {
    const { pdfDoc } = this.state; // Retrieve pdfDoc from the state
    if (!userObject) {
      console.error('User object is not defined.');
      return;
    }
  
    const userObjectJSON = JSON.stringify(userObject, null, 2);
    const d = JSON.parse(userObjectJSON);
    this.setN1Value(d);
  
    const answeredQuestions = Object.keys(userObject)
      .filter((key) => key !== 'submit' && userObject[key])
      .map((key) => ({
        question: key.replace(/_/g, ' '),
        answer: userObject[key],
      }));
  
    const additionalText = [
      { text: 'For School:', style: 'header' },
      { text: '\n' },
      { text: 'Uniform Code:Attire Requirements: Our School likely enforces a strict uniform policy.Attendance Policy:Mandatory Attendance: Allied School has a mandatory attendance policy. Students are expected to attend all classes regularly and punctually.' },
      { text: '\n' },
      { text: 'For College', style: 'header' },
      { text: '\n' },
      { text: 'All the pupils are required to comply with the acquainted college rules. Breach of the orders may lead to strict disciplinary actions against the doer. Purpose of setting up the rules does limit to college only but it also contributes a lot to an individuals life. An educational institute not only provides students with books knowledge and learning but abiding by certain rules is the way to make them civilized and adopt these manners for life. Update on the set policies and rules may be promulgated by the administration from time to time. Our College follow strict schools like rules entailing many restrictions while others have a broader perspective towards education and the environment.In adherence to a well-defined dress code, our college places a strong emphasis on uniformity and discipline in attire. The designated uniform shop affiliated with our college ensures that students have easy access to the prescribed attire. It is mandatory for students to procure their uniforms from this specified shop to maintain uniformity and meet the colleges established standards. The white salwar kameez and the designated color of the dupatta serve as a symbol of unity among students and foster a sense of identity within the college community. Furthermore, our colleges dress code extends to footwear, mandating that students wear black shoes. This meticulous attention to uniformity not only instills a sense of discipline but also promotes a professional and focused atmosphere within the college environment. The strict dress code is implemented to create a visually cohesive and organized ambiance, emphasizing the colleges commitment to academic excellence and professionalism. This practice reflects the colleges belief in the importance of a standardized appearance and its role in cultivating a conducive learning environment. It is important for students to recognize and abide by these dress code regulations as failure to comply may result in consequences such as restricted access to the premises or other disciplinary measures. By adhering to this strict dress code, our college aims to foster a sense of unity, discipline, and pride among its student body.' },
      { text: 'every student is required to wear their college identity card within the college premises. The college identity card is not just a piece of plastic; it plays a crucial role in ensuring the safety and security of our campus. It is a means of swift recognition and verification for all students, faculty, and staff.Here are a few key points regarding the mandatory college identity card policy: Essential for Entry: Your college identity card serves as your official entry pass to the college. Without it, you may not be allowed to enter the premises. Security Measures: This policy is in place to enhance the security measures within the college. The identity card helps us quickly recognize and distinguish between students and unauthorized individuals. Verification Process: The college identity card is an integral part of our verification process. It allows us to confirm your status as a registered student of [College Name]. Consequences of Non-Compliance: Students found without their college identity card may face consequences, including denial of entry, and we urge all students to adhere to this policy for their benefit and the benefit of the entire college community. Please ensure that you wear your identity card visibly at all times while on the college premises. If you have misplaced or lost your card, kindly contact the administration office promptly for assistance in obtaining a replacement. College, the administration places a strong emphasis on maintaining high attendance and promoting a culture of academic responsibility among its students. The college employs a sophisticated Attendance and Leave Management System designed to keep a close eye on students attendance and manage leave requests effectively. Attendance Monitoring: College utilizes an advanced attendance tracking system that records students attendance for each class. Faculty members are responsible for marking attendance during lectures, and this information is instantly updated in the college database. Regular audits are conducted to ensure accuracy and address any discrepancies.'},
      { text: 'Consequences of Low Attendance: Students with consistently low attendance percentages receive timely warnings, emphasizing the importance of attending classes regularly. College believes in fostering a proactive approach to academic engagement, and students falling below the attendance threshold are either not granted concessions for examinations or are warned about the potential consequences of continued absenteeism.Leave Management: The college recognizes that students may encounter unforeseen circumstances or health issues that require them to take leave. In such cases, students are encouraged to submit leave applications in advance or as soon as possible. These applications are reviewed by the college administration, and leaves are granted in case of emergencies, sickness, or other valid reasons. Communication with Parents: To keep parents informed about their childs academic activities, College has implemented a daily reporting system. At the end of each day, students attendance status is automatically sent to their parents contact numbers via SMS. This ensures that parents are actively engaged in monitoring their childs attendance and can address any concerns promptly. Penalties for Intentional Bunking: College takes a firm stance against intentional class bunking. Students caught intentionally missing classes without valid reasons face penalties, which may include warnings, fines, or other disciplinary actions. This policy aims to instill a sense of responsibility and accountability among the student body. Since assignments have a great contribution in results and grades, students have no way out but submit their assignments on time. In both, semester and yearly system students make and submit assignments given on different topics. Weekly or monthly class tests and quizzes are conducted which are mandatory for all students as it counts the marks in summing up final year results.Wrong use of college equipment, use of cigarette, alcohol, drugs, take out official information, stealing others’ stuff or any other cyber crime involvement is considered to be an illegal activity and anybody found guilty or involved in such activities will be suspended from the college or will be fined heavily based upon the sensitivity of the matter.'},
      { text: 'Students who do not follow the fixed rules in terms of dress code, assignments, behaviour, or any other guidelines, their liability will render to a violation of the rules. Their college matters may be withheld by the college administration. After suspension from college due to volatile actions, students will apply again for re-admission. However, management will have the authority to deem again upon the matter.Students alone are responsible to maintain discipline in the college. By following rules, guidelines of teachers, taking on time classes, timely submit assignments, prepare for exams and tests, on-time fee payments, preventing themselves from ruining college’s property within the premises, avoid violation of rules and any other depraved activity. Students represent their college outside by their attitude and mannered behaviour, so they must try to adopt good things to become a respectable human being.If a student in any way get to know any private information has the responsibility to keep it private and respect college’s confidentiality. Any equipment under the usage of students must not be miss-used for personal purposes and one should have some loyalty towards their college. One must try to remain honest and focused on studies only.Class interaction is an important part of the college rules. It includes interaction with classmates in many ways. Students can interact during group assignments, presentations, collaborations for events and many other things. Things that should be present while interacting with others are; respect, tolerance, harmony, patience, ability to adapt, ability to learn, understand and appreciate others’ take on something, give others the chance to speak and positivity of attitude. It is the best way to enhance your confidence and traits for life. Thats how one can create a good environment in his/her optimistic presence. '},
      { text: 'It is against the law and considered to be an illegal activity to get involved in cyber-crimes. Students who try to hack college’s systems to fetch confidential information for the sake of exams are punished by not only the college administration but legal actions can also be taken against them. During the education period, one must stay focused, positive and put all the hard work to make it work not only in the present but also in future. Students who follow the rules and regulations of the college are efficacious among others. They stand out in the world. Their value and worth is unmatched. Everything has its precious substance and so the bright students always shine among those who take it for granted.'},
      // Include the rest of the additional text in a similar manner
      { text: 'For University', style: 'header' },
      { text: '\n' },
      { text: 'Admission Criteria for BS: Applicant must have the domicile/local certificate of the Gwadar, Lasbela/Hub, Kech (Turbat) or Awaran District of Balochistan. Applicant must have completed 12 years of education with at least 50% marks in Secondary School Certificate (SSC) and also in Higher Secondary School Certificate (HSSC) or equivalent. Applicant must have completed both Secondary School Certificate (SSC) and Higher Secondary School Certificate (HSSC) or Equivalent from college/institute located in any of the defined districts of Balochistan i.e. Gwadar, Lasbela/Hub, Kech (Turbat) and Awaran. Students already enrolled in any BS program prior to the advertisement maximum one academic year/ session may also apply. Maximum age is 22 years as on closing date. Applicants will have to meet HEC and university criteria for admission in BS program. Applicants who are already availing any other HEC/Government scholarship are not eligible to apply.Result awaiting students are not eligible to apply'},
    ];
  
    const content = [
      ...additionalText,
      { text: '', style: 'header' },
      { text: '\n' },
      ...answeredQuestions.map(({ question, answer }, index) => [
        { text: `${question}: ${answer}`, style: 'subheader' },
        { text: '', margin: [0, index === answeredQuestions.length - 1 ? 0 : -10, 0, 0] },
      ]),
      
    ];
  
    const docDefinition = {
      content,
      styles: {
        header: { fontSize: 12, bold: true, color: '#0070c9' },
        subheader: { fontSize: 10, bold: true, margin: [0, 10, 0, 5], lineHeight: 1.2 },
      },
    };
  
    const newPdfDoc = pdfMake.createPdf(docDefinition);
  
    this.setState({ pdfDoc: newPdfDoc }, () => {
      // After setting the state, call sendToServer
      this.sendToServer();
  
      // Set a timer to show the message after 10 seconds
      setTimeout(() => {
        this.setState({ showMessage: true });
      }, 10000);
    });
  };
  
  

  sendToServer = () => {
    const { pdfDoc, userObject } = this.state;
    const modifiedfilename = this.state.n1.Full_Name.trim().replace(/\s+/g, '_');
  
    // Add modifiedfilename to the userObject
    const modifiedUserObject = {
      ...userObject,
      modifiedfilename: modifiedfilename,
    };
  
    console.log('User Object as JSON:', modifiedUserObject);
  
    if (pdfDoc) {
      pdfDoc.getBuffer(async (buffer) => {
        const base64PdfData = btoa(String.fromCharCode.apply(null, buffer));
  
        try {
          const response = await axios.post('http://localhost:8000/generate-pdf', {
            userObject: modifiedUserObject,
            pdfData: base64PdfData.trim(),
          });
  
          console.log('Server Response:', response.data);
        } catch (error) {
          console.error('Error sending to server:', error);
        }
      });
    }
  };
  
  

  downloadPDF = () => {
    const { pdfDoc } = this.state;

    if (pdfDoc) {
      pdfDoc.download('output.pdf');
    }
  };

  render() {
    const { showMessage } = this.state;


    return (
      <div className='chatBox'>
        <img
          src={robot}
          alt="your-gif"
          
          className='loading'
        />
        <div >
        <p className='text-show'>.........</p>
        <h4 className='text-main'>Your ChatBot has been Trained Please Test Your ChatBot 
        By Clicking the below Image</h4>
        <a href="https://wa.me/+14155238886?text=join%20animal-voice" target="_blank" rel="noopener noreferrer">
          <img src={wa} className='wa'/>
        </a>
        <p className='text-ins'> OR Send 'join animal-voice' to '+14155238886' on WhatsApp</p>
        
        </div>
      </div>
    );
  }
}

export default Post;
