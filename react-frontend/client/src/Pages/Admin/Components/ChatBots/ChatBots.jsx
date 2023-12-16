import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import './ChatBots.css';
import { ThemeProvider } from 'styled-components';
import Post from './Post';

const theme = {
  background: '#fff',
  fontFamily: 'Helvetica Neue',
  headerBgColor: 'linear-gradient(to right, #636FA4, #E8CBC0)',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#636FA4',
  botFontColor: '#fff',
  userBubbleColor: '#E8CBC0',
  userFontColor: '#4a4a4a',
  
};

const config ={
  width: "1100px",
  height: "600px", 
  clearOnEnd: true,
};
class ChatBots extends Component {
  handleEnd = (userResponses) => {
    console.log("User responses:", userResponses);
    // You can use userResponses to generate the PDF link or perform other actions
    // Example: const pdfLink = generatePdfLink(userResponses);
    // Update your state or perform other actions accordingly
  };
  render() {
    return (
      <div className="chatbot">
        <ThemeProvider theme={theme}>
      <ChatBot
        headerTitle="Create Your Own ChatBot...!"
        recognitionEnable={true}
        bubbleStyle={{ fontSize: '16px',letterSpacing: '1.5px' }}
        botAvatar="https://png.pngtree.com/png-vector/20220108/ourmid/pngtree-background-featuring-a-robot-head-in-vector-illustration-vector-png-image_43884294.jpg"
        userAvatar="https://cdn-icons-png.flaticon.com/512/3607/3607444.png"
        steps={[
          {
            id: '1',
            message: 'What is your name?',
            trigger: 'name',
          },
          {
            id: 'name',
            user: true,
            collectResponse: true,
            trigger: '2',
          },
          {
            id: '2',
            message: 'What is the type of your institute?',
            trigger: 'instituteType',
          },
          {
            id: 'instituteType',
            options: [
              { value: 'School', label: 'School', trigger: 'schoolName' },
              { value: 'College', label: 'College', trigger: 'collegeName' },
              { value: 'University', label: 'University', trigger: 'UniversityName' },
            ],
          },
          {
            id: 'schoolName',
            message: 'What is the name of your school?',
            trigger: 'forschool',
          },
          {
            id: 'collegeName',
            message: 'What is the name of your College?',
            trigger: 'forcollege',
          },{
            id: 'UniversityName',
            message: 'What is the name of your University?',
            trigger: 'foruni',
          },
          {
            id: 'forschool',
            user: true,
            trigger: 'schoolshift',
          },
          {
            id: 'forcollege',
            user: true,
            trigger: 'colLocation',
          },  
          {
            id: 'foruni',
            user: true,
            trigger: 'unitype',
          },         
          // ABOUT GENERAL SCHOOL QUESTIONS
          {
            id: 'schoolshift',
            message: 'Is your school?',
            trigger: 'shift',
          },
          {
            id: 'shift',
            options: [
              { value: 'Morning', label: 'Morning', trigger: 'schoolstd' },
              { value: 'Evening', label: 'Evening', trigger: 'schoolstd' },
              { value: 'Both', label: 'Both', trigger: 'schoolstd' },
            ],
          },
          {
            id: 'schoolstd',
            message: 'Student in your School?',
            trigger: 'stdcount',
          },
          {
            id: 'stdcount',
            options: [
              { value: '100 to 200', label: '100 to 200', trigger: 'schoolteacher' },
              { value: '200 to 500', label: '100 to 200', trigger: 'schoolteacher' },
              { value: 'above 500', label: 'above 500', trigger: 'schoolteacher' },
            ],
          },
          // ABOUT SCHOOL TEACHERS AND SCHOOL STAFF
          {
            id: 'schoolteacher',
            message: 'How are Teachers in your school selected and trained?',
            trigger: 'teacher',
          },
          {
            id: 'teacher',
            options: [
              { value: 'Teacher Eligibility Test (TET)', label: 'Teacher Eligibility Test (TET)', trigger: 'schoolteacherQ' },
              { value: 'Academic Qualifications', label: 'Academic Qualifications', trigger: 'schoolteacherQ' },
              { value: 'Teacher Training Programs', label: 'Teacher Training Programs', trigger: 'schoolteacherQ' },
              { value: 'Interview and Demo Classes', label: 'Interview and Demo Classes', trigger: 'schoolteacherQ' },
              { value: 'In-House Training', label: 'In-House Training', trigger: 'schoolteacherQ' },
            ],
          },
          {
            id: 'schoolteacherQ',
            message: 'What are the qualifications and experience of the teaching staff?',
            trigger: 'teacherQualification',
          },
          {
            id: 'teacherQualification',
            options: [
              { value: 'Bachelors Degree', label: 'Bachelors Degree', trigger: 'schoolratio' },
              { value: 'Masters Degree or Higher', label: 'Masters Degree or Higher', trigger: 'schoolratio' },
            ],
          },
          {
            id: 'schoolratio',
            message: 'What is the student-to-teacher ratio in the classrooms ',
            trigger: 'tratio',
          },
          {
            id: 'tratio',
            options: [
              { value: '20:1', label: '20:1', trigger: 'schoolSupportStaff' },
              { value: '30:1', label: '30:1', trigger: 'schoolSupportStaff' },
              { value: '40:1', label: '40:1', trigger: 'schoolSupportStaff' },
              { value: '50:1', label: '50:1', trigger: 'schoolSupportStaff' },
            ],
          },
          {
            id: 'schoolSupportStaff',
            message: 'Are there any support staff, such as counselors or special educators?',
            trigger: 'schoolStaff',
          },
          {
            id: 'schoolStaff',
            options: [
              { value: 'School Counselors', label: 'School Counselors', trigger: 'schoolFacility' },
              { value: 'Special Educators', label: 'Special Educators', trigger: 'schoolFacility' },
              { value: 'Learning Support Specialists', label: 'Learning Support Specialists', trigger: 'schoolFacility' },
            ],
          },
          // ABOUT SCHOOL FACILITIES AND TECHNOLOGY
          {
            id: 'schoolFacility',
            message: 'Can you describe the schools facilities, including classrooms, libraries, and laboratories? ',
            trigger: 's_facility',
          },
          {
            id: 's_facility',
            user: true,
            trigger: 'Facility',
          },
          {
            id: 'Facility',
            message: 'Is there a playground or sports facilities?',
            trigger: 'FacilityOption',
          },
          {
            id: 'FacilityOption',
            options: [
              { value: 'Yes', label: 'Yes', trigger: 'schoolTechnology' },
              { value: 'No', label: 'No', trigger: 'schoolTechnology' },
            ],
          },
          {
            id: 'schoolTechnology',
            message: 'What technology is available for students use?',
            trigger: 'TechnologyOption',
          },
          {
            id: 'TechnologyOption',
            options: [
              { value: 'Computers and Laptops', label: 'Computers and Laptops', trigger: 'schoolStudentSafety' },
              { value: 'Learning Management Systems (LMS)', label: 'Learning Management Systems (LMS)', trigger: 'schoolStudentSafety' },
              { value: 'Projectors', label: 'Projectors', trigger: 'schoolStudentSafety' },
              { value: 'Computers and Laptops,Learning Management Systems (LMS),Projectors', label: 'All Of The Above', trigger: 'schoolStudentSafety' },
            ],
          },
          // ABOUT SCHOOL STUDENT SAFTEY AND SECURITY
          {
            id: 'schoolStudentSafety',
            message: 'How is student safety ensured within the school premises?',
            trigger: 'SchoolSafety',
          },
          {
            id: 'SchoolSafety',
            options: [
              { value: 'Security Guards', label: 'Security Guards', trigger: 'schoolSecurity' },
              { value: 'CCTV Surveillance', label: 'CCTV Surveillance', trigger: 'schoolSecurity' },
              { value: 'Fencing and Gates', label: 'Fencing and Gates', trigger: 'schoolSecurity' },
              { value: 'Safety Policies', label: 'Safety Policies', trigger: 'schoolSecurity' },
            ],
          },
          {
            id: 'schoolSecurity',
            message: 'Is there a school nurse or medical facilities on the campus?',
            trigger: 's_security'
          },
          {
            id: 's_security',
            options: [
              { value: 'Yes', label: 'Yes', trigger: 'discipline' },
              { value: 'No', label: 'No', trigger: 'discipline' },
            ],
          },
          // ABOUT SCHOOL DISCIPLINE AND BULLING
          {
            id: 'discipline',
            message:'Do you want to provide the schools rules and policies regarding student behavior and discipline?',
            trigger: 's_discipline',
          },
          {
            id: 's_discipline',
            options: [
              { value: 'Yes', label: 'Yes', trigger: 'u-discipline' },
              { value: 'No', label: 'No', trigger: 'schoolBullying' },
            ],
          },
          {
            id: 'u-discipline',
            message: 'Provide Details of School Policies reagrding student behaviour and discipline',
            trigger: 'userDiscipline',
          },
          {
            id: 'userDiscipline',
            user: true,
            trigger: 'schoolBullying',
          },
          {
            id: 'schoolBullying',
            message: 'Do you want to Provide deatils of how bullying and disciplinary issues addressed?',
            trigger: 's-bullying',
          },
          {
            id: 's-bullying',
            options: [
              { value: 'Yes', label: 'Yes', trigger: 'u-bullying' },
              { value: 'No', label: 'No', trigger: 'schoolParents' },
            ],
          },
          {
            id: 'u-bullying',
            message: 'Provide Details of how bullying and disciplinary issues addressed?',
            trigger: 'userBullying',
          },
          {
            id: 'userBullying',
            user: true,
            trigger: 'schoolParents',
          },
          // ABOUT SCHOOL PARENTS INVOLVEMENT
          {
            id: 'schoolParents',
            message: 'How can parents stay informed about their childs progress and school events?',
            trigger: 'schoolParentsOptions',
          },
          {
            id: 'schoolParentsOptions',
            options: [
              { value: 'Online Portals and Apps', label: 'Online Portals and Apps', trigger: 'schoolPI' },
              { value: 'Parent-Teacher Meetings', label: 'Parent-Teacher Meetings', trigger: 'schoolPI' },
              { value: 'SMS Alerts', label: 'SMS Alerts', trigger: 'schoolPI' },
              { value: 'Report Cards', label: 'Report Cards', trigger: 'schoolPI' },
              { value: 'School Websites', label: 'School Websites', trigger: 'schoolPI' },
            ],
          },
          {
            id: 'schoolPI',
            message: 'Are there opportunities for parent involvement in school activities or committees',
            trigger: 'schoolPIOptions',
          },
          {
            id: 'schoolPIOptions',
            options: [
              { value: 'Parent-Teacher Association (PTA)', label: 'Parent-Teacher Association (PTA)', trigger: 'schoolPC' },
              { value: 'School Events and Functions', label: 'School Events and Functions', trigger: 'schoolPC' },
              { value: 'Community Engagement', label: 'Community Engagement', trigger: 'schoolPC' },
            ],
          },
          {
            id: 'schoolPC',
            message: 'How can parents communicate with teachers and the school administration',
            trigger: 'schoolPCOptions',
          },
          {
            id: 'schoolPCOptions',
            options: [
              { value: 'Email', label: 'Email', trigger: 'schoolPCEmail' },
              { value: 'Phone Calls', label: 'Phone Calls', trigger: 'schoolPCEmail' },
              { value: 'School Visits', label: 'School Visits', trigger: 'schoolVisits' },
              { value: 'Email, Phone Calls, and School Visites', label: 'All Of The Above', trigger: 'schoolPCEmail' },
            ],

          },
          {
            id: 'schoolVisits',
            message: 'Please Provide Your School Location',
            trigger: 'schoolPCVisits',
          },
          {
            id: 'schoolPCVisits',
            user: true,
           trigger: 'schoolPCEmail'
          },
          {
            id: 'schoolPCEmail',
            message: 'Please Provide Your Email Address',
            trigger: 'schoolEmail',
          },
          {
            id: 'schoolEmail',
            user: true,
            validator: (value) => {
              if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))
                {
                  return true;
                }
              else
                {
                  return'Please enter a valid email.';
                }
           },
           trigger: 'schoolPCNumber'
          },
          {
            id: 'schoolPCNumber',
            message: 'Please Provide Your School Contact Number',
            trigger: 'schoolNumber',
          },
          {
            id: 'schoolNumber',
            user: true,
            validator: (value) => {
              if (/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(value))
                {
                  return true;
                }
              else
                {
                  return'Please enter a valid phone number.';
                }
           },
           trigger:'schoolCF',
          },
          // ABOUT SCHOOL CURRICULUM AND SUBJECTS
          {
            id: 'schoolCF',
            message: 'What is the curriculum followed by the school?',
            trigger: 'schoolCFOptions',
          },
          {
            id: 'schoolCFOptions',
            options: [
              { value: 'Oxford', label: 'Oxford', trigger: 'schoolSP' },
              { value: 'Federal', label: 'Federal', trigger: 'schoolSP' },
              { value: 'Punjab', label: 'Punjab', trigger: 'schoolSP' },
              { value: 'Other', label: 'Other', trigger: 'schoolCFOther' },
            ],
          },
          {
            id: 'schoolCFOther',
            message: 'Please Specify the Curriculum followed by your School',
            trigger: 'schoolCurriculum',
          },
          {
            id: 'schoolCurriculum',
            user: true,
            trigger: 'schoolSP',
          },
          {
            id: 'schoolSP',
            message: 'Are there any special programs or extracurricular activities?',
            trigger: 'schoolSPOptions',
          },
          {
            id: 'schoolSPOptions',
            options: [
              { value: 'Debating and Public Speaking', label: 'Debating and Public Speaking', trigger: 'schoolPrograms' },
              { value: 'Sports Teams', label: 'Sports Teams', trigger: 'schoolPrograms' },
              { value: 'Quiz and Science Clubs', label: 'Quiz and Science Clubs', trigger: 'schoolPrograms' },
              { value: 'Literary and Cultural Festivals', label: 'Literary and Cultural Festivals', trigger: 'schoolPrograms' },
              { value: 'Debating and Public Speaking,Sports Teams,Literature and Culture Festivals,Quiz and Science Clubs', label: 'All Of The Above', trigger: 'schoolPrograms' },
            ],
          },
          {
            id: 'schoolPrograms',
            message: 'Select the subjects and courses offered in your School',
            trigger: 'schoolPOptions',
          },
          {
            id: 'schoolPOptions',
            options: [
              { value: 'Medical', label: 'Medical', trigger: 'schoolHomework' },
              { value: 'Computer Science', label: 'Computer Science', trigger: 'schoolHomework' },
              { value: 'Engineering', label: 'Engineering', trigger: 'schoolHomework' },
              { value: 'Arts', label: 'Arts', trigger: 'schoolHomework' },
              { value: 'Medical, Computer Science, Engineering, Arts', label: 'All Of The Above', trigger: 'schoolHomework' },
            ],
          },
          {
            id: 'schoolHomework',
            message: 'How much homework can students expect at different grade levels?',
            trigger: 'schoolHOptions',
          },
          {
            id: 'schoolHOptions',
            options: [
              { value: 'Light to Moderate Homework', label: 'Light to Moderate Homework', trigger: 'schoolMeetings' },
              { value: 'Moderate to Heavy Homework', label: 'Moderate to Heavy Homework', trigger: 'schoolMeetings' },
              { value: 'Customized Homework', label: 'Customized Homework', trigger: 'schoolMeetings' },
              { value: 'Depends on the subjects and the Teachers', label: 'Depends on the Subjects and Teachers', trigger: 'schoolMeetings' },
            ],
          },
          {
            id: 'schoolMeetings',
            message: 'Are there parent-teacher conferences or progress reports?',
            trigger: 'schoolMOptions',
          },
          {
            id: 'schoolMOptions',
            options: [
              { value: 'Yes', label: 'Yes', trigger: 'schoolAdmission' },
              { value: 'No ', label: 'No ', trigger: 'schoolAdmission' },
            ],
          },
          // ABOUT ADMISSION PROCEDURES
          {
            id: 'schoolAdmission',
            message: 'What is the Procedure to take admission in your School?',
            trigger: 'schoolAOptions',
          },
          {
            id: 'schoolAOptions',
            options: [
              { value: 'Visit The School and then Obtain an Admission Form, Fill Out the Admission Form,Attach Required Documents, Submit The Form,Attend the Entrance Test and Wait for Results', 
              label: 'Visit The School and then Obtain an Admission Form, Fill Out the Admission Form,Attach Required Documents, Submit The Form,Attend the Entrance Test and Wait for Results',
              trigger: 'schoolAge' },
              { value: 'Visit The School and then Complete Necessary Forms, Attend Enrollment Sessions, Follow School Instructions, and start your classes ',
              label: 'Visit The School and then Complete Necessary Forms, Attend Enrollment Sessions, Follow School Instructions, and start your classes',
              trigger: 'schoolAge' },
            ],
          },
          {
            id: 'schoolAge',
            message: 'What is the age requirement for admission to preschool or kindergarten?',
            trigger: 'schoolAgeOptions',
          },
          {
            id: 'schoolAgeOptions',
            options: [
              { value: 'Preschool: between the ages of 2.5 to 3 years and for Kindergarten: around 4 to 5 years old', label: 'Preschool: between the ages of 2.5 to 3 years and for Kindergarten: around 4 to 5 years old',trigger: 'schoolAE' },
              { value: 'Preschool:  around the age of 3 years and for Kindergarten: around 4 years old', label: 'Preschool:  around the age of 3 years and for Kindergarten: around 4 years old', trigger: 'schoolAE' },
            ],
          },
          {
            id: 'schoolAE',
            message: 'Are there any entrance exams or interviews for admission?',
            trigger: 'schoolAEOptions',
          },
          {
            id: 'schoolAEOptions',
            options: [
              { value: 'Yes', label: 'Yes',trigger: 'schoolADocuments' },
              { value: 'No', label: 'No', trigger: 'schoolADocuments' },
            ],
          },
          {
            id: 'schoolADocuments',
            message: 'What documents are required for enrollment?',
            trigger: 'schoolADOptions',
          },
          {
            id: 'schoolADOptions',
            options: [
              { value: 'Application Form, Birth Certificate, Passport-sized Photographs, Residence Proof, Parent/Guardian ID, Transfer Certificate (if applicable)', 
              label: 'Application Form, Birth Certificate, Passport-sized Photographs, Residence Proof, Parent/Guardian ID, Transfer Certificate (if applicable)',
              trigger: 'schoolTF' },
              { 
              label: 'Other ', 
              trigger: 'schoolADOther' },
            ],
          },
          {
            id: 'schoolADOther',
            message: 'Please Provide Your enrollment Documents',
            trigger: 'schoolDocuments',
          },
          {
            id: 'schoolDocuments',
            user: true,
            trigger: 'schoolTF',
          },
          // ABOUT SCHOOL FEES AND FINANCIAL MATTERS
          {
            id: 'schoolTF',
            message: 'What are the tuition fees and other expenses?',
            trigger: 'schoolTutionFees',
          },
          {
            id: 'schoolTutionFees',
            user: true,
            trigger: 'schoolSF',
          },
          {
            id: 'schoolSF',
            message: 'Are there any scholarships or financial aid options available?',
            trigger: 'schoolSFOptions',
          },
          {
            id: 'schoolSFOptions',
            options: [
              { value: 'Yes', label: 'Yes',trigger: 'schoolFees' },
              { value: 'No', label: 'No', trigger: 'schoolFees' },
            ],
          },
          {
            id: 'schoolFees',
            message: 'What is the Fees?',
            trigger: 'schoolFeesAmount',
          },
          {
            id: 'schoolFeesAmount',
            user: true,
            trigger: 'schoolACost',
          },
          
          {
            id: 'schoolACost',
            message: 'Are there any additional costs for uniforms or school supplies?',
            trigger: 'schoolACOptions',
          },
          {
            id: 'schoolACOptions',
            options: [
              { value: 'Yes', label: 'Yes',trigger: 'schoolTransport' },
              { value: 'No', label: 'No', trigger: 'schoolTransport' },
            ],
          },
          // ABOUT TRANSPORTATION 
          {
            id: 'schoolTransport',
            message: 'Does the school provide transportation services?',
            trigger: 'sTransportOptions',
          },
          {
            id: 'sTransportOptions',
            options: [
              { value: 'Yes', label: 'Yes',trigger: 'schoolTR' },
              { value: 'No', label: 'No', trigger: 'schoolTR' },
            ],
          },
          {
            id: 'schoolTR',
            message: 'Do you want to provide the routes and saftey measures for School?',
            trigger: 'sTROptions',
          },
          {
            id: 'sTROptions',
            options: [
              { value: 'Yes', label: 'Yes',trigger: 'schoolR' },
              { value: 'No', label: 'No', trigger: 'schoolRF' },
            ],
          },
          {
            id: 'schoolR',
            message: 'Please Specify the Routes for the Bus',
            trigger: 'schoolTRoutes',
          },
          {
            id: 'schoolTRoutes',
            user: true,
            trigger: 'schoolRF',
          },
          {
            id: 'schoolRF',
            message: 'Is transportation included in the school fees?',
            trigger: 'schoolRFOptions'
          },
          {
            id: 'schoolRFOptions',
            options: [
              { value: 'Yes', label: 'Yes',trigger: 'InstituteWebsite' },
              { value: 'No', label: 'No', trigger: 'InstituteWebsite' },
            ],
          },
          // GENERAL QUESTIONS ABOUT COLLEGE
          {
            id: 'colLocation',
            message: 'What is the Location of your College?',
            trigger: 'ctype',
          },
          {
            id: 'coltype',
            message: 'Is Your College',
            trigger: 'ctype',
          },
          {
            id: 'ctype',
            options: [
              { value: 'Medical', label: 'Medical', trigger: 'colMF' },
              { value: 'Engineering', label: 'Engineering', trigger: 'colMF' },
              { value: 'Both', label: 'Both', trigger: 'colMF' },
              { value: 'Other', label: 'Other', trigger: 'colMF' },
            ],
          },
          {
            id: 'colMF',
            message: 'Your College is',
            trigger: 'cMF',
          },
          {
            id: 'cMF',
            options: [
              { value: 'Male', label: 'Male', trigger: 'colSJ' },
              { value: 'Female', label: 'Female', trigger: 'colSJ' },
              { value: 'Male-Campus and Female Campus', label: 'Male-Campus and Female Campus', trigger: 'colSJ' },
              { value: 'Co-Education', label: 'Co-Education', trigger: 'colSJ' },
            ],
          },
          {
            id: 'colSJ',
            message: 'What are the job prospects and career opportunities in my childs chosen field of study? ',
            trigger: 'cSJ',
          },
          {
            id: 'cSJ',
            options: [
              { value: 'Engineering: software development, civil engineering, electrical engineering, and more.', label: 'Engineering: have various fields including software development, civil engineering, electrical engineering, and more.', trigger: 'colAT' },
              { value: 'Medical: public or Private hospitals, government healthcare facilities, and research institutions.', label: 'Medical: have various fields such as public or private hospitals, government healthcare facilities, and research institutions.', trigger: 'colAT' },
              { value: 'Computer Science: software development, cybersecurity, data analysis, and IT management.', label: 'Computer Science: software development, cybersecurity, data analysis, and IT management.', trigger: 'colAT' },
              { value: 'Engineering: software development, civil engineering, electrical engineering, and more.Medical: public or Private hospitals, government healthcare facilities, and research institutions.Computer Science: software development, cybersecurity, data analysis, and IT management.', 
              label: 'All Of The Above',  trigger: 'colAT' },
            ],
          },
          {
            id: 'colAT',
            message: 'How can children prepare for the college admission exams?',
            trigger: 'cAT',
          },
          {
            id: 'cAT',
            options: [
              { value: 'Solve previous years question papers ', label: 'Solve previous years question papers ', trigger: 'colRS' },
              { value: 'Online resources and test prep books can help with this.', label: 'Online resources and test prep books can help with this.', trigger: 'colRS' },
              { value: 'Practice Time Management', label: 'Practice Time Management', trigger: 'colSJ' },
              { value: 'Solve previous years question papers. Online resources and test prep books can help with this.Practice Time Management ', label: 'All of the Above', trigger: 'colRS' },
            ],
          },
          {
            id: 'colRS',
            message: 'What advice can you give to parents so that the children will choose the right subjects?',
            trigger: 'cRS',
          },
          {
            id: 'cRS',
            options: [
              { value: 'Understand Your Childs Interests', label: 'Understand Your Childs Interests', trigger: 'colCGE' },
              { value: 'Research Career Paths', label: 'Research Career Paths', trigger: 'colCGE' },
              { value: 'Assess Academic Strengths', label: 'Assess Academic Strengths', trigger: 'colCGE' },
              { value: 'Assess Academic Strengths, Research Career Paths, Undersatnd Your Childs Interest', label: 'All Of the Above', trigger: 'colCGE' },
              { value: 'Other', label: 'Other', trigger: 'colCGE' },
            ],
          },
          {
            id: 'colCGE',
            message: 'What is the curriculum and grading system in your college',
            trigger: 'cCGE',
          },
          {
            id: 'cCGE',
            options: [
              { value: 'Curriculum: Standardized curriculum set by the Federal Education Boards.Grading System: 70% and above for an "A" grade, 60-69% for a "B" grade', 
              label: ' Curriculum: Standardized curriculum set by the Federal Education Boards.Grading System: 70% and above for an "A" grade, 60-69% for a "B" grade', 
              trigger: 'colSResource' },
              { value: 'Other', label: 'Other', trigger: 'colCGEducation' },
            ],
          },
          {
            id: 'colCGEducation',
            message: 'Please Provide the Curriculum and Grading System in your college',
            trigger: 'cCGEducation',
          },
          {
            id: 'cCGEducation',
            user: true,
            trigger: 'colSResource',
          },
          {
            id: 'colSResource',
            message: 'What are the best study resources and reference books for first-year and second-year students?',
            trigger: 'cSResource',
          },
          {
            id: 'cSResource',
            options: [
              { value: 'For Federal Board(FBISE): Physics: "College Physics" by Serway and Vuille. Chemistry: "Chemistry for Class XI and XII" by Punjab Textbook Board. Mathematics: "Mathematics for Class XI and XII" by Punjab Textbook Board. Biology: "Biology for Class XI and XII" by Punjab Textbook Board. English: "Better English" by Norman Lewis for vocabulary and "Practical English Grammar" by Thomson and Martinet for grammar.', 
              label: ' For Federal Board(FBISE): Physics: "College Physics" by Serway and Vuille. Chemistry: "Chemistry for Class XI and XII" by Punjab Textbook Board. Mathematics: "Mathematics for Class XI and XII" by Punjab Textbook Board. Biology: "Biology for Class XI and XII" by Punjab Textbook Board. English: "Better English" by Norman Lewis for vocabulary and "Practical English Grammar" by Thomson and Martinet for grammar.', 
              trigger: 'colEA' },
              { value: 'For Punjab Boards (BISE Lahore, BISE Rawalpindi, etc.): Physics: "College Physics" by Serway and Vuille. Chemistry: "Chemistry for Class XI and XII" by Punjab Textbook Board. Mathematics: "Mathematics for Class XI and XII" by Punjab Textbook Board. Biology: "Biology for Class XI and XII" by Punjab Textbook Board. English: "Better English" by Norman Lewis for vocabulary and "Practical English Grammar" by Thomson and Martinet for grammar.', 
              label: 'For Punjab Boards (BISE Lahore, BISE Rawalpindi, etc.): Physics: "College Physics" by Serway and Vuille. Chemistry: "Chemistry for Class XI and XII" by Punjab Textbook Board. Mathematics: "Mathematics for Class XI and XII" by Punjab Textbook Board. Biology: "Biology for Class XI and XII" by Punjab Textbook Board. English: "Better English" by Norman Lewis for vocabulary and "Practical English Grammar" by Thomson and Martinet for grammar.', 
              trigger: 'colEA' },
              { value: 'For Sindh Boards (BSEK and BISE Karachi): Physics: "Physics for Class XI and XII" by Sindh Textbook Board. Chemistry: "Chemistry for Class XI and XII" by Sindh Textbook Board. Mathematics: "Mathematics for Class XI and XII" by Sindh Textbook Board. Biology: "Biology for Class XI and XII" by Sindh Textbook Board. English: "Better English" by Norman Lewis for vocabulary and "Practical English Grammar" by Thomson and Martinet for grammar.', 
              label: ' For Sindh Boards (BSEK and BISE Karachi): Physics: "Physics for Class XI and XII" by Sindh Textbook Board. Chemistry: "Chemistry for Class XI and XII" by Sindh Textbook Board. Mathematics: "Mathematics for Class XI and XII" by Sindh Textbook Board. Biology: "Biology for Class XI and XII" by Sindh Textbook Board. English: "Better English" by Norman Lewis for vocabulary and "Practical English Grammar" by Thomson and Martinet for grammar.', 
              trigger: 'colEA' },
              { value: 'For KPK Boards (BISE Peshawar, etc.): Physics: "Physics for Class XI and XII" by KPK Textbook Board. Chemistry: "Chemistry for Class XI and XII" by KPK Textbook Board. Mathematics: "Mathematics for Class XI and XII" by KPK Textbook Board. Biology: "Biology for Class XI and XII" by KPK Textbook Board. English: "Better English" by Norman Lewis for vocabulary and "Practical English Grammar" by Thomson and Martinet for grammar.', 
              label: 'For KPK Boards (BISE Peshawar, etc.): Physics: "Physics for Class XI and XII" by KPK Textbook Board. Chemistry: "Chemistry for Class XI and XII" by KPK Textbook Board. Mathematics: "Mathematics for Class XI and XII" by KPK Textbook Board. Biology: "Biology for Class XI and XII" by KPK Textbook Board. English: "Better English" by Norman Lewis for vocabulary and "Practical English Grammar" by Thomson and Martinet for grammar.', 
              trigger: 'colEA' },
              { value: 'Other', label: 'Other', trigger: 'colStudy' },
            ],
          },
          {
            id: 'colStudy',
            message: 'What are the best study resources and reference books for first-year and second-year students?',
            trigger: 'cStudy',
          },
          {
            id: 'cStudy',
            user: true,
            trigger: 'colEA',
          },
          {
            id: 'colEA',
            message: 'Are there any extracurricular activities or clubs available for first-year and second-year students?',
            trigger: 'cEA'
          },
          {
            id: 'cEA',
            options: [
              { value: 'Yes', label: 'Yes', trigger: 'colBEA' },
              { value: 'No', label: 'No', trigger: 'colBEA' },
            ],
          },
          {
            id: 'colBEA',
            message: 'How can they balance academics and extracurricular activities?',
            trigger: 'cBEA',
          },
          {
            id: 'cBEA',
            options: [
              { value: 'Prioritize Time Management', label: 'Prioritize Time Management', trigger: 'colSF' },
              { value: 'Collaborate with Peers', label: 'Collaborate with Peers', trigger: 'colSF' },
              { value: 'Balance Your Commitments', label: 'Balance Your Commitments', trigger: 'colSF' },
              { value: 'Prioritize Time Management,Balance Your Commitments,Collaborate with Peers', label: 'All Of The Above', trigger: 'colSF' },
            ],
          },
          {
            id: 'colSF',
            message: 'Are there any scholarships or financial aid options available?',
            trigger: 'cSF'
          },
          {
            id: 'cSF',
            options: [
              { value: 'Yes', label: 'Yes', trigger: 'colRequirements' },
              { value: 'No', label: 'No', trigger: 'colRequirements' },
            ],
          },
          {
            id: 'colRequirements',
            message: 'What are the admission requirements for your college?',
            trigger: 'cRequirements'
          },
          {
            id: 'cRequirements',
            options: [
              { value: 'Matriculation or equivalent certificate with a minimum specified percentage (usually around 60-70% or as per college policy). Application form submission within the given deadline. Admission test or interview, if required. Payment of admission fees. Submission of required documents, including photocopies of academic certificates and identification documents.Merit-based or quota-based admissions, depending on the colleges policy.',
              label: 'Matriculation or equivalent certificate with a minimum specified percentage (usually around 60-70% or as per college policy). Application form submission within the given deadline. Admission test or interview, if required. Payment of admission fees. Submission of required documents, including photocopies of academic certificates and identification documents.Merit-based or quota-based admissions, depending on the colleges policy.', 
              trigger: 'colFees' },
              { value: 'Matriculation or equivalent certificate with a minimum specified percentage. Application form submission within the given deadline. Submission of required documents, including photocopies of academic certificates and identification documents. Merit-based admissions based on Matriculation exam results or an entry test conducted by a centralized educational board (e.g., BISE).Reserved seats for minority groups, special categories, and quotas.', 
              label: 'Matriculation or equivalent certificate with a minimum specified percentage. Application form submission within the given deadline. Submission of required documents, including photocopies of academic certificates and identification documents. Merit-based admissions based on Matriculation exam results or an entry test conducted by a centralized educational board (e.g., BISE).Reserved seats for minority groups, special categories, and quotas.', 
              trigger: 'colFees' },
              { value: 'Other', label: 'Other', trigger: 'cR' },
            ],
          },
          {
            id: 'cR',
            message: 'Please Provide the admission requirements for your College',
            trigger: 'cRu'
          },
          {
            id: 'cRu',
            user: true,
            trigger: '',
          },
          {
            id: 'colFees',
            message: 'What is the cost of college education, including tuition fees and other expenses?',
            trigger: 'cFees',
          },
          {
            id: 'cFees',
            user: true,
            trigger: 'colASupport',
          },
          {
            id: 'colASupport',
            message: 'Are there academic support services available, such as tutoring or counseling?',
            trigger: 'cASupport',
          },
          {
            id: 'cASupport',
            options: [
              { value: 'Yes', label: 'Yes', trigger: 'colRHelp' },
              { value: 'No', label: 'No', trigger: 'colRHelp' },
            ],
          },
          {
            id: 'colRHelp',
            message: 'How can a child receive help if they are struggling academically?',
            trigger: 'cRHelp',
          },
          {
            id: 'cRHelp',
            options: [
              { value: 'Private Tutoring', label: 'Private Tutoring', trigger: 'InstituteWebsite' },
              { value: 'After-School Programs', label: 'After-School Programs', trigger: 'InstituteWebsite' },
              { value: 'Communicate with your childs teachers', label: 'Communicate with your childs teachers', trigger: 'InstituteWebsite' },
              { value: 'Private Tutoring, After-School Programs, Communicate with your childs teachers', label: 'All Of The Above', trigger: 'InstituteWebsite' },
            ],
          },
          // GENERAL QUESTIONS ABOUT UNIVERSITY
          {
            id: 'uniLocation',
            message: 'Univerity particularly deals with?',
            trigger: 'uLocation',
          },
          {
            id: 'uLocation',
            user: true,
            trigger: 'unitype'
          },          
          {
            id: 'unitype',
            message: 'Univerity particularly deals with?',
            trigger: 'utype',
          },
          {
            id: 'utype',
            options: [
              { value: 'Medical university', label: 'Medical university', trigger: '6' },
              { value: 'Engineering university', label: 'Engineering university', trigger: '6' },
              { value: 'General university', label: 'General university', trigger: '6' },
            ],
          },
          {
            id: 'InstituteWebsite',
            message: 'Please provide Your Institute Website',
            trigger: 'Iwebsite'
          },
          {
            id: 'Iwebsite',
            user: true,
            trigger: 'AdditionalInfo',
          },
          {
            id: 'AdditionalInfo',
            message: 'Do you Want to provide any Additional Information About Your Institute',
            trigger: 'AIOptions',
          },
          {
            id: 'AIOptions',
            options: [
              { value: 'Yes', label: 'Yes', trigger: 'AI'},
              { value: 'No', label: 'No', trigger: '6'},
            ]
          },
          {
            id:'AI',
            message: 'Please Provide Any Other Information that can help train your chatbot',
            trigger: 'AInfo',
          },
          {
            id: 'AInfo',
            user: true,
            trigger: '6'
          },
          {
            id:'6', 
            message:'Are You Ready To Train Your ChatBot?', 
            trigger:'submit'
          },
          {
            id:'submit', 
            options:[
            {value:'Yes', label:'Yes', trigger:'end-message'},
            {value:'No', label:'No', trigger:'no-submit'},
            ] 
          },
          {
            id: 'no-submit',
            message:'Your information was not submitted.', 
          },
          {
            id: 'end-message',
            component: <Post />,
            end: true,
          },
        ]}
        {...config}
        handleEnd={this.handleEnd}
      />
                
      </ThemeProvider>
      </div>
    );
  }
}

export default ChatBots;