import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUsers, faDollarSign, faClock} from '@fortawesome/free-solid-svg-icons'

function Features(){
    return(
        <div className="container px-4 py-5" id="featured-3">
            <h2 className="pb-2 border-bottom">لماذا تستخدم هذه المنصة ؟</h2>
            
            <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                <div class="col d-flex align-items-start"
                data-toggle="tooltip" data-placement="top" title='With a clear and simple user interface, MyBousta is a platform in which you can call using it "Fool proof"!'>
                    <div> 
                        <h2 className="mx-auto">
                            <FontAwesomeIcon icon={faUsers} className="mx-2"/>
                            سهل
                        </h2>
                        <ul >
                            <li >
                            واجهة مستخدم واضحة وبسيطة تجعلها سهلة الاستخدام.
                            </li>
                            <li >
                            منصة توفر تجربة مستخدم بديهية،تجعل حجز خدمة أمرًا سهلاً.
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col d-flex align-items-start"
                data-toggle="tooltip" data-placement="top" title='By excluding unnecessary additionnal costs like transportation, myBoustaallows you to do all the time costly services from home, which saves you time, money and energy!'>
                    <div> 
                        <h2>
                            <FontAwesomeIcon icon={faDollarSign} className="mx-2"/>
                            ضمان التكافؤ الاجتماعي 
                        </h2>
                        <ul >
                            <li >
                            تقليص الاحتكار والقضاء على الاسواق الموازية
                            </li>
                            <li >
                                No more transportation fees(While preparing for required documents).
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col d-flex align-items-start"
                data-toggle="tooltip" data-placement="top" title="MyBousta scans it's database each time you make a service so that you can benefit from already existing and still valid documents, which allows you to reduce preparation time per service, which also saves you the time and effort to do so!">
                    <div > 
                        <h2>
                            <FontAwesomeIcon icon={faClock} className="mx-2"/>
                            سريع
                        </h2>

                        <ul >
                            <li >
                              يمكنك اكمال العملية في بضع دقائق 
                            </li>
                            <li >
                              تسريع الإجراءات من خلال إكمال جميع عمليات الرفع الثقيل في المنزل.
                            </li>
                        </ul>
                    </div>
                </div>                
            </div>
        </div>        
                   
    );
}

export default Features;
