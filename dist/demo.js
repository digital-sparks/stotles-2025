(()=>{window.Webflow||(window.Webflow=[]);window.Webflow.push(()=>{let o={formId:"0aa12cd4-f23d-4cd8-8fc6-eea9849469c8",redirectUrls:["https://meetings.hubspot.com/nonoka-sugawara/stotles-introduction","https://meetings.hubspot.com/dominic-bennett"],experienceFieldName:"pricing_page_pub_sec_experience_2025",experienceOptions:["Legacy - 3 - Won more than 5 large contracts","Legacy -4 - Won more than 50 contracts","Buyer: Work for a government authority"],employeeCountFieldName:"emplyee_count__request_a_demo",employeeCountOptions:["11-50","51-200","201-500"]},d=()=>o.redirectUrls[Math.floor(Math.random()*o.redirectUrls.length)],a=(e,t)=>e.find(n=>n.name===t)?.value,i=(e,t)=>{document.querySelectorAll(e).forEach(n=>{n.style.display=t})};window.addEventListener("message",function(e){if(e.data.type==="hsFormCallback"&&e.data.eventName==="onFormSubmit"&&e.data.id===o.formId){let t=a(e.data.data,o.experienceFieldName),n=a(e.data.data,o.employeeCountFieldName);o.experienceOptions.includes(t)&&o.employeeCountOptions.includes(n)?window.location.replace(d()):(document.querySelector(`[formid="${e.data.id}"]`).style.display="none",i('[data-element="hubspot-show"]',"block"),i('[data-element="hubspot-hide"]',"none"))}})});})();
