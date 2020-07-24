const mockData = [
{"email":"cwildsmith0@harvard.edu","name":"Case Wildsmith","mobile":"5314779978","location":"47819 Upham Road","text":"Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.","image":"https://semantic-ui.com/images/avatar/large/elliot.jpg","enqNo":50},
{"email":"cbirdsall1@dion.ne.jp","name":"Clayborne Birdsall","mobile":"8551501607","location":"313 Rieder Place","text":"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.","image":"https://semantic-ui.com/images/avatar/large/jenny.jpg","enqNo":49},
{"email":"lessery2@mediafire.com","name":"Lorin Essery","mobile":"5970472298","location":"94 Havey Alley","text":"Maecenas rhoncus aliquam lacus.","image":"https://semantic-ui.com/images/avatar2/large/kristy.png","enqNo":48},
{"email":"fjorger3@un.org","name":"Fleming Jorger","mobile":"1143934733","location":"36827 Claremont Way","text":"Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.","image":"https://semantic-ui.com/images/avatar2/large/molly.png","enqNo":47},
{"email":"fgarrold4@theguardian.com","name":"Forrester Garrold","mobile":"5903411487","location":"39958 Parkside Circle","text":"Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.","image":"https://semantic-ui.com/images/avatar2/large/elyse.png","enqNo":46},
{"email":"efronzek5@bigcartel.com","name":"Elihu Fronzek","mobile":"4253958966","location":"86572 Dahle Center","text":"In hac habitasse platea dictumst.","image":"https://semantic-ui.com/images/avatar/large/jenny.jpg","enqNo":45},
{"email":"bdoucette6@goodreads.com","name":"Bjorn Doucette","mobile":"9950040973","location":"6377 American Ash Point","text":"Integer ac leo.","image":"https://semantic-ui.com/images/avatar/large/steve.jpg","enqNo":44},
{"email":"fgetten7@fema.gov","name":"Feliks Getten","mobile":"8151769394","location":"029 Spohn Court","text":"Ut at dolor quis odio consequat varius.","image":"https://semantic-ui.com/images/avatar/large/daniel.jpg","enqNo":43},
{"email":"kfruser8@harvard.edu","name":"Kilian Fruser","mobile":"7020567142","location":"181 Stoughton Point","text":"Curabitur at ipsum ac tellus semper interdum.","image":"https://semantic-ui.com/images/avatar/large/helen.jpg","enqNo":42},
{"email":"acleghorn9@blogtalkradio.com","name":"Alejoa Cleghorn","mobile":"2215796332","location":"9790 Weeping Birch Point","text":"Aliquam erat volutpat.","image":"https://semantic-ui.com/images/avatar/small/matt.jpg","enqNo":41}
];
var enqDiv = document.querySelector('div.enquiries');
var detEnq = document.querySelector('div.detailedEnquiries');
var detEnqList = document.querySelector('div.detailedEnquiries div.row div.col-4');
var enquiry = document.querySelector('div.enquiry');
var enqholder = document.querySelector('div.detailedEnquiries div.row div.col-8');
var serialNo = 50;
function backBtn(){
  var enqdivs = document.querySelectorAll('div.enq');
  enqDiv.style.display = 'block';
  detEnq.style.display = 'none';
  for (let x = 0; x < enqdivs.length; x++) {
    const elem = enqdivs[x];
    elem.classList.remove('active');
  }
}
function showDetails(enqNo){
  enqholder.innerHTML = '<br />';
  for (let y = 0; y < mockData.length; y++) {
    const data = mockData[y];
    if(data["enqNo"] == enqNo){
      let { email, name, mobile, location, text, image } = data;
      var innerhtml = `<img src="https://img.icons8.com/ios-filled/25/000000/close-window.png" class="back" onclick="backBtn()"/>
      <div class="row">
        <div class="col-6">
          <img src=${image} width="60px" height="60px" /><br /><br />
          <h4>${name}</h4>
        </div>
        <div class="col-6" style="text-align: right;">
          Assigned To <select name="select" id="select">
            <option value="select">Select</option>
          </select>
        </div>
      </div><br />
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item">
          <a class="nav-link active" id="home-tab" data-toggle="tab" href="#" role="tab" aria-controls="home" aria-selected="true">Overview</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="profile-tab" data-toggle="tab" href="#" role="tab" aria-controls="profile" aria-selected="false">Conversation</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="contact-tab" data-toggle="tab" href="#" role="tab" aria-controls="contact" aria-selected="false">SMS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="contact-tab" data-toggle="tab" href="#" role="tab" aria-controls="contact" aria-selected="false">Email</a>
        </li>
      </ul><br />
      <h6>Enquiry Details</h6><br />
      <table>
        <tr>
          <th>Name</th>
          <td>${name}</td>
        </tr>
        <tr>
          <th>Email</th>
          <td>${email}</td>
        </tr>
        <tr>
          <th>Company</th>
          <td>Cisco</td>
        </tr>
        <tr>
          <th>Mobile Number</th>
          <td>${mobile}</td>
        </tr>
        <tr>
          <th>Location</th>
          <td>${location}</td>
        </tr>
        <tr>
          <th>DateTime</th>
          <td>06-09-2020 7:19 AM</td>
        </tr>
        <tr>
          <th>Message</th>
          <td>${text}</td>
        </tr>
      </table>`;
      var div = document.createElement('div');
      div.classList.add('container');
      div.innerHTML = innerhtml;
      enqholder.appendChild(div);
      break;
    }
  }
}
for (let x = 0; x < mockData.length; x++) {
    const data = mockData[x];
    let { email, name, mobile, location, text, image } = data;
    var div1 = document.createElement('div');
    var div2 = document.createElement('div');
    div1.classList.add('container');
    div1.classList.add('enq');
    div1.setAttribute('data-enq',serialNo);
    div2.classList.add('container');
    div2.classList.add('enq');
    div2.setAttribute('data-enq',serialNo);
    div2.addEventListener('click',function(){
      var siblings = document.querySelectorAll('div.detailedEnquiries div.row div.col-4 div.container');
      for(var y=0;y<siblings.length;y++){
        siblings[y].classList.remove('active');
      }
      this.classList.add('active');
      showDetails(this.getAttribute('data-enq'));
    })
    div1.addEventListener('click',function(){
      enqDiv.style.display = 'none';
      detEnq.style.display = 'block';
      var detenqDivs = document.querySelectorAll('div.detailedEnquiries div.enq');
      for (let y = 0; y < detenqDivs.length; y++) {
        const elem = detenqDivs[y];
        if(elem.getAttribute('data-enq') === this.getAttribute('data-enq')){
          elem.classList.add('active');
          var rect = elem.getBoundingClientRect();
          detEnqList.scrollTo(0,rect.top);
          document.body.scrollTop = 60;
          document.documentElement.scrollTop = 60;
          break;
        }
      }
      showDetails(this.getAttribute('data-enq'));
    })
    var innerhtml2 = `<div class="row">
    <div class="col-3">
      <span class="badge badge-primary">${serialNo}</span>&nbsp;
      <a href="#">
        <img src=${image} width="20px" height="20px" />&nbsp;
        <span class="username">${name}</span>
        </a>
    </div>
    <div class="col-9">
      <span class="badge badge-warning">06-09-2020 7:19 AM</span>
    </div>
  </div>
  <div class="note alert alert-secondary" role="alert">
    ${text.substr(0,20)}...
  </div>`;
  var innerhtml1 = `<div class="row">
  <div class="col-3">
    <span class="badge badge-primary">${serialNo}</span>&nbsp;
    <a href="#">
      <img src=${image} width="20px" height="20px" />&nbsp;
      <span class="username">${name}</span>
    </a>
  </div>
  <div class="col-9">
    <span class="badge badge-warning">06-09-2020 7:19 AM</span>
  </div>
</div>
<div class="row userinfo">
  <div class="col-3">
    <span>Mobile - ${mobile}</span>
  </div>
  <div class="col-4">
    <span>Email - ${email}</span>
  </div>
  <div class="col-4">
    <span>Location - ${location}</span>
  </div>
</div>
<div class="note alert alert-secondary" role="alert">
  ${text.substr(0,30)}...
</div>`;
    div1.innerHTML = innerhtml1;
    div2.innerHTML = innerhtml2;
    enqDiv.appendChild(div1);
    detEnqList.appendChild(div2);
  serialNo--;
}