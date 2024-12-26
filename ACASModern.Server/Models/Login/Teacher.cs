using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ACASModern.Server.Models.Login
{
    public class Teacher
    {
        public int ID { get; set; } // رقم المعلم
        public string FullName { get; set; } // الاسم الكامل
        public string Email { get; set; } // البريد الإلكتروني
        public string PhoneNumber { get; set; } // رقم الهاتف
        public string Password {get;set;}

        // معلومات أكاديمية
        public string Department { get; set; } // القسم الأكاديمي
        public string Title { get; set; } // المسمى الوظيفي (مثل: أستاذ، محاضر)
        public ICollection<string> Subjects { get; set; } // المواد التي يدرسها

        // معلومات إضافية
        public DateTime HireDate { get; set; } // تاريخ التوظيف
        public string OfficeLocation { get; set; } // موقع المكتب
    }
}