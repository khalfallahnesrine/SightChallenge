import React from 'react';
import { Link } from 'react-router-dom';
import NavbarLoggedIn from "../Components/NavbarLoggedIn";
import Footer from '../Components/Footer';

function MyAppointments(){
    return (
      <div>
        <NavbarLoggedIn />
        <div className="container ">
          <h3 className="mb-2"> الإعلام عن تجاوزات</h3>
          <form className="p-4 p-md-5 border rounded-3 bg-light">
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="CINInput"
                placeholder="CIN"
              />
              <label for="CINInput">رقم بطاقة الهوية الوطنية</label>
            </div>
            <div>
              <label for="branch">اختيار المكان</label>
              <select>
                <option selected value="Ariana">
                  أريانة
                </option>
                <option value="Beja">باجة</option>
                <option value="Ben Arous">بن عروس</option>
                <option value="Bizerte">بنزرت</option>
                <option value="Gabes">قابس</option>
                <option value="Nabel">نابل</option>
                <option value="Jendouba">جندوبة</option>
                <option value="Kairouan">القيروان</option>
                <option value="kasserin">القصرين</option>
                <option value="Kebili">قبلي</option>
                <option value="Kef">الكاف</option>
                <option value="Mahdia">المهدية</option>
                <option value="Manouba">منوبة</option>
                <option value="Medenine">مدنين</option>
                <option value="Monastir">المنستير</option>
                <option value="Gafsa">قفصة</option>
                <option value="Sfax">صفاقس</option>
                <option value="Sidi Bouzid">سيدي بوزيد</option>
                <option value="Siliana">سليانة</option>
                <option value="Sousse">سوسة</option>
                <option value="Tataouine">تطاوين</option>
                <option value="Tozeur">توزر</option>
                <option value="Tunis">تونس</option>
                <option value="Zaghouan">زغوان</option>
              </select>
            </div>

            <div className="form-floating mb-3">
              <textarea
                className="form-control"
                id="MassageBox"
                rows="3"
                placeholder="Message"
              ></textarea>
              <label for="MassageBox">الموضوع</label>
            </div>

            <hr className="my-4" />
            <button className="w-100 btn btn-lg btn-primary" type="submit">
              إرسال
            </button>
          </form>

          <Link to="/UDB/MakeAppointment">
            <center>
              <button type="button" className="btn m-2 btn-outline-success">
                تحيين العنوان
              </button>
            </center>
          </Link>
        </div>
        <Footer />
      </div>
    );
}

export default MyAppointments;