import React from 'react';
import Footer from '../Components/Footer';
import NavbarLoggedIn from '../Components/NavbarLoggedIn';
import { Link } from 'react-router-dom';
function Documents(){
    return(
        <div>
            <NavbarLoggedIn/>
            <h1 className="p-5 border-bottom display-3">المخزون الخاص بك</h1>
            <div className='container mx-auto'>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">رمز شريطي</th>
                        <th scope="col">المنتج</th>
                        <th scope='col'> الكمية الإجمالية </th>
                        <th scope="col">الكمية المتبقية</th>
                        <th scope="col">الفترة</th>
                   
                    </tr>
                </thead>
                <tbody>
                    <tr class="table-success">
                        <th scope="row">619999112</th>
                        <td>حليب</td>
                        <td>6</td>
                        <td>3</td>
                        <td>11/12/2022-17/12/2022</td>
                    </tr>

                    <tr class="table-success">
                        <th scope="row">619234567</th>
                        <td>دقيق</td>
                        <td>1</td>
                        <td>1</td>
                        <td>11/12/2022-17/12/2022</td>
                    </tr>

                    <tr class="table-success">
                    <td>619887543</td>
                        <th scope="row">سكر</th>
                        <td>2</td>
                        <td>1</td>
                        <td>11/12/2022-17/12/2022</td>
                    </tr>

                    <tr class="table-success">
                        <th scope="row">61977865</th>
                        <td>سميد</td>
                        <td>1</td>
                        <td>1</td>
                        <td>11/12/2022-17/12/2022</td>
                    </tr>

                    <tr class="table-danger">
                        <th scope="row">619567430</th>
                        <td>أرز</td>
                        <td>1</td>
                        <td>0</td>
                        <td>11/12/2022-17/12/2022</td>
                    </tr>

                    <tr class="table-success">
                        <th scope="row">619006549</th>
                        <td>زيت</td>
                        <td>1</td>
                        <td>1</td>
                        <td>11/12/2022-17/12/2022</td>
                    </tr>

                   
                </tbody>

            </table>
            <Link to ='/UDB/MakeAppointment'>
                    <center>
                        <button type="button" className="btn m-2 btn-outline-success">
                        تحيين العنوان
                        </button>
                    </center>
            </Link>
            </div>
            <Footer/>
        </div>
    );
}

export default Documents;