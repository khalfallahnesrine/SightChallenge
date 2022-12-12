import react from "react";
import { Link } from "react-router-dom";

function FAQ(){
    return(
        <div>
            <div class="container px-4 py-5" id="icon-grid">
                <h2 class="pb-2 border-bottom">  : الأسئلة المتكررة</h2>

                <div class="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-4 py-5">
                    <div class="col d-flex align-items-start">
                        <div>
                            <h4 class="fw-bold mb-0">من يستطيع استخدام اقضيلي؟</h4>
                            <p>   .. ولديك بطاقة هوية أو جواز سفر غير طوعي يثبت أنك مواطن تونسي (أكبر من 18 عامًا)  أي شخص قادر على استخدام اقضيلي طالما أنك بالغ </p>
                        </div>
                    </div>

                    <div class="col d-flex align-items-start">
                        <div>
                            <h4 class="fw-bold mb-0">كيف يمكنني التسجيل ؟</h4>
                            <p>للتسجيل وإنشاء حساب في نظامنا الأساسي، عليك فقط النقر فوق زر الاشتراك الموجود أعلى هذه الصفحة ثم ملء النموذج بالمعلومات اللازمة. </p >
    </div>
                    </div>

                    <div class="col d-flex align-items-start">
                        <div>
                            <h4 class="fw-bold mb-0">   كيفية الإطلاع على المخزون  ؟</h4>
                            <p>   ( تحقق من مخزونك ) لكل فرد الحق في كميات محدودة من المواد الأساسية ، لمتابعة استهلاكك و الكميات المتوفرة لديك للإطلاع مخزونك يمكنك إنشاء حساب و التمتع بخدمة        </p>
                        </div>
                    </div>

                    <div class="col d-flex align-items-start">
                        <div>
                            <h4 class="fw-bold mb-0">  كيفية الإعلام عن التجاوزات  ؟  </h4>
                            <p>        (يرجى انشاء حساب للتمتع بهذه الخدمة) إن لاحظت أي تجاوزات الرجاء الإعلام عنها       </p>
                        </div>
                    </div>

                    <div class="col d-flex align-items-start">
                        <div>
                            <h4 class="fw-bold mb-0">       كيفية تحيين العنوان ؟   </h4>
                            <p>   . في حالة عدم تواجدك في مكان الاقامة أو تغييره، حدد عنوانك الجديد   </p>
                        </div>
                    </div>

                    
                   
                </div>

                <Link to='/Contact'>
                    <center>لمزيد من المعلومات، لا تتردد في الاتصال بنا</center>
                </Link>
            </div>
        </div>
    );
}

export default FAQ;