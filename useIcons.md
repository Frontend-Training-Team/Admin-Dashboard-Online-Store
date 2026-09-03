# 1.  https://lucide.dev/icons : ادخل على صفحة الأيقونات
# 2. (مثلاً: user, home, settings) اكتب اسم الحاجه اللي بتدور عليها في السيرش 
# 3. ( Copy JSX ) لما تلاقي الأيقونة اللي تعجبك، اضغط عليها وهتلاقي 

# 4. إزاي تستخدم الأيقونة في الكود :

import { Home, User } from 'lucide-react';

function MyComponent() {
  return (
    <div>
      <h2> <Home />Icon Home </h2> // Uppercase اي ايقون لازم يكون اول حرف فيها 
      <button> <User />Icon User </button>
    </div>
  );
}
 
