import { useState } from "react";
import { Link } from "react-router";
import {
  ChevronDown,
  ChevronRight,
  LayoutDashboard,
  Calendar,
  Mail,
  ShoppingCart,
  MessageSquare,
  GraduationCap,
  Layout,
  Share2,
  LifeBuoy,
  Flag,
  Globe,
  Lock,
} from "lucide-react";

const LeftSide = ({ collapsed }) => {
  const [openMenus, setOpenMenus] = useState([]);

  const toggleMenu = (menu) => {
    if (openMenus.includes(menu)) {
      setOpenMenus(openMenus.filter((m) => m !== menu));
    } else {
      setOpenMenus([...openMenus, menu]);
    }
  };

  // Helper function to render a menu item with icon and label
  const renderMenuItem = (icon, label, to) => (
    <Link
      to={to}
      className="flex items-center gap-2 py-2 hover:text-blue-600"
    >
      {icon} {!collapsed && label}
    </Link>
  );

  return (
    <div
      className={`h-screen  p-4 overflow-y-auto transition-all duration-300
        ${collapsed ? "w-20" : "w-64"}`}
    >
      {/* Dashboard */}
      <div>
        <button
          onClick={() => toggleMenu("dashboard")}
          className="flex items-center justify-between w-full font-semibold text-[#5E6E82] py-2"
        >
          <span className="flex items-center gap-2">
            <LayoutDashboard size={18} />
            {!collapsed && "Dashboard"}
          </span>
          {!collapsed &&
            (openMenus.includes("dashboard") ? (
              <ChevronDown size={16} />
            ) : (
              <ChevronRight size={16} />
            ))}
        </button>
        {!collapsed && openMenus.includes("dashboard") && (
          <ul className="ml-6 mt-1  font-semibold text-[#5E6E82]   space-y-1">
            <li><Link to="/dashboard/default">Default</Link></li>
            <li><Link to="/dashboard/analytics">Analytics</Link></li>
            <li><Link to="/dashboard/crm">CRM</Link></li>
            <li><Link to="/dashboard/ecommerce">E Commerce</Link></li>
            <li><Link to="/dashboard/lms">LMS <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full">New</span></Link></li>
            <li><Link to="/dashboard/management">Management</Link></li>
            <li><Link to="/dashboard/saas">SaaS</Link></li>
            <li><Link to="/dashboard/support">Support Desk</Link></li>
          </ul>
        )}
      </div>

      {/* Calendar */}
      <div className="mt-4 font-semibold text-[#5E6E82]">
        {renderMenuItem(<Calendar size={18} />, "Calendar", "/calendar")}
      </div>

      {/* Chat */}
      <div className="font-semibold text-[#5E6E82]">
        {renderMenuItem(<MessageSquare size={18} />, "Chat", "/chat")}
      </div>

      {/* Email */}
      <div>
        <button onClick={() => toggleMenu("email")} className="flex items-center justify-between w-full py-2">
          <span className="flex font-semibold text-[#5E6E82] items-center gap-2">
            <Mail size={18} /> {!collapsed && "Email"}
          </span>
          {!collapsed &&
            (openMenus.includes("email") ? (
              <ChevronDown size={16} />
            ) : (
              <ChevronRight size={16} />
            ))}
        </button>
        {!collapsed && openMenus.includes("email") && (
          <ul className="ml-6 font-semibold text-[#5E6E82] space-y-1">
            <li><Link to="/email/inbox">Inbox</Link></li>
            <li><Link to="/email/detail">Email detail</Link></li>
            <li><Link to="/email/compose">Compose</Link></li>
          </ul>
        )}
      </div>

      {/* Events */}
      <div>
        <button onClick={() => toggleMenu("events")} className="flex items-center justify-between w-full py-2">
          <span className="flex font-semibold text-[#5E6E82] items-center gap-2">
            <Calendar size={18} /> {!collapsed && "Events"}
          </span>
          {!collapsed &&
            (openMenus.includes("events") ? (
              <ChevronDown size={16} />
            ) : (
              <ChevronRight size={16} />
            ))}
        </button>
        {!collapsed && openMenus.includes("events") && (
          <ul className="ml-6 font-semibold text-[#5E6E82] space-y-1">
            <li><Link to="/events/upcoming">Upcoming</Link></li>
            <li><Link to="/events/past">Past</Link></li>
          </ul>
        )}
      </div>

      {/* E-Commerce */}
      <div>
        <button onClick={() => toggleMenu("ecommerce")} className="flex items-center justify-between w-full py-2">
          <span className="flex font-semibold text-[#5E6E82] items-center gap-2">
            <ShoppingCart size={18} /> {!collapsed && "E Commerce"}
          </span>
          {!collapsed &&
            (openMenus.includes("ecommerce") ? (
              <ChevronDown size={16} />
            ) : (
              <ChevronRight size={16} />
            ))}
        </button>
        {!collapsed && openMenus.includes("ecommerce") && (
          <ul className="ml-6 font-semibold text-[#5E6E82] space-y-1">
            <li className="font-semibold mt-2">Product</li>
            <li><Link to="/ecommerce/product/add">Add a product</Link></li>
            <li><Link to="/ecommerce/product/list">Product list</Link></li>
            <li><Link to="/ecommerce/product/grid">Product grid</Link></li>
            <li><Link to="/ecommerce/product/details">Product details</Link></li>
            <li className="font-semibold mt-2">Orders</li>
            <li><Link to="/ecommerce/orders/customers">Customers</Link></li>
            <li><Link to="/ecommerce/orders/customer-details">Customer details</Link></li>
            <li><Link to="/ecommerce/orders/cart">Shopping cart</Link></li>
            <li><Link to="/ecommerce/orders/checkout">Checkout</Link></li>
            <li><Link to="/ecommerce/orders/billing">Billing</Link></li>
            <li><Link to="/ecommerce/orders/invoice">Invoice</Link></li>
          </ul>
        )}
      </div>

      {/* E-Learning */}
      <div>
        <button onClick={() => toggleMenu("elearning")} className="flex items-center justify-between w-full py-2">
          <span className="flex font-semibold text-[#5E6E82] items-center gap-2">
            <GraduationCap size={18} /> {!collapsed && "E Learning"}
          </span>
          {!collapsed &&
            (openMenus.includes("elearning") ? (
              <ChevronDown size={16} />
            ) : (
              <ChevronRight size={16} />
            ))}
        </button>
        {!collapsed && openMenus.includes("elearning") && (
          <ul className="ml-6 font-semibold text-[#5E6E82] space-y-1">
            <li><Link to="/elearning/course">Course</Link></li>
            <li><Link to="/elearning/student-overview">Student overview</Link></li>
            <li><Link to="/elearning/trainer-profile">Trainer profile</Link></li>
          </ul>
        )}
      </div>

      {/* Kanban */}
      <div className="font-semibold text-[#5E6E82]">
        {renderMenuItem(<Layout size={18} />, "Kanban", "/kanban")}
      </div>

      {/* Social */}
      <div>
        <button onClick={() => toggleMenu("social")} className="flex items-center justify-between w-full py-2">
          <span className="flex font-semibold text-[#5E6E82] items-center gap-2">
            <Share2 size={18} /> {!collapsed && "Social"}
          </span>
          {!collapsed &&
            (openMenus.includes("social") ? (
              <ChevronDown size={16} />
            ) : (
              <ChevronRight size={16} />
            ))}
        </button>
        {!collapsed && openMenus.includes("social") && (
          <ul className="ml-6 font-semibold text-[#5E6E82] space-y-1">
            <li><Link to="/social/feed">Feed</Link></li>
            <li><Link to="/social/activity">Activity log</Link></li>
            <li><Link to="/social/notifications">Notifications</Link></li>
            <li><Link to="/social/followers">Followers</Link></li>
          </ul>
        )}
      </div>

      {/* Support Desk */}
      <div>
        <button onClick={() => toggleMenu("support")} className="flex items-center justify-between w-full py-2">
          <span className="flex font-semibold text-[#5E6E82] items-center gap-2">
            <LifeBuoy size={18} /> {!collapsed && "Support Desk"}
          </span>
          {!collapsed &&
            (openMenus.includes("support") ? (
              <ChevronDown size={16} />
            ) : (
              <ChevronRight size={16} />
            ))}
        </button>
        {!collapsed && openMenus.includes("support") && (
          <ul className="ml-6 font-semibold text-[#5E6E82] space-y-1">
            <li><Link to="/support/table">Table view</Link></li>
            <li><Link to="/support/card">Card view</Link></li>
            <li><Link to="/support/contacts">Contacts</Link></li>
            <li><Link to="/support/contact-details">Contact details</Link></li>
            <li><Link to="/support/tickets">Tickets preview</Link></li>
            <li><Link to="/support/quick-links">Quick links</Link></li>
            <li><Link to="/support/reports">Reports</Link></li>
          </ul>
        )}
      </div>

      {/* Pages Header */}
      {!collapsed && <div className="mt-4 mb-2 text-xs uppercase tracking-wide font-semibold text-[#5E6E82]">Pages</div>}

      <div className="font-semibold text-[#5E6E82]">
        {renderMenuItem(<Flag size={18} />, "Starter", "/pages/starter")}
        {renderMenuItem(<Globe size={18} />, "Landing", "/pages/landing")}
      </div>

      {/* Authentication */}
      <div>
        <button onClick={() => toggleMenu("auth")} className="flex items-center justify-between w-full py-2">
          <span className="flex font-semibold text-[#5E6E82] items-center gap-2">
            <Lock size={18} /> {!collapsed && "Authentication"}
          </span>
          {!collapsed &&
            (openMenus.includes("auth") ? (
              <ChevronDown size={16} />
            ) : (
              <ChevronRight size={16} />
            ))}
        </button>
        {!collapsed && openMenus.includes("auth") && (
          <ul className="ml-6 font-semibold text-[#5E6E82] space-y-1">
            <li className="font-semibold mt-1">Simple</li>
            <li><Link to="/auth/simple/login">Login</Link></li>
            <li><Link to="/auth/simple/logout">Logout</Link></li>
            <li><Link to="/auth/simple/register">Register</Link></li>
            <li><Link to="/auth/simple/forgot">Forgot password</Link></li>
            <li><Link to="/auth/simple/confirm">Confirm mail</Link></li>
            <li><Link to="/auth/simple/reset">Reset password</Link></li>
            <li><Link to="/auth/simple/lock">Lock screen</Link></li>

            <li className="font-semibold mt-1">Card</li>
            <li><Link to="/auth/card/login">Login</Link></li>
            <li><Link to="/auth/card/logout">Logout</Link></li>
            <li><Link to="/auth/card/register">Register</Link></li>
            <li><Link to="/auth/card/forgot">Forgot password</Link></li>
            <li><Link to="/auth/card/confirm">Confirm mail</Link></li>
            <li><Link to="/auth/card/reset">Reset password</Link></li>
            <li><Link to="/auth/card/lock">Lock screen</Link></li>

            <li className="font-semibold mt-1">Split</li>
            <li><Link to="/auth/split/login">Login</Link></li>
            <li><Link to="/auth/split/logout">Logout</Link></li>
            <li><Link to="/auth/split/register">Register</Link></li>
            <li><Link to="/auth/split/forgot">Forgot password</Link></li>
            <li><Link to="/auth/split/confirm">Confirm mail</Link></li>
            <li><Link to="/auth/split/reset">Reset password</Link></li>
            <li><Link to="/auth/split/lock">Lock screen</Link></li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default LeftSide;
