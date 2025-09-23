import { useState } from "react";
import { NavLink } from "react-router";
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
  User,
  DollarSign,
  HelpCircle,
  AlertTriangle,
  Grid,
  MoreHorizontal,
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

  const renderMenuItem = (icon, label, to) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center ${collapsed ? "justify-center" : "gap-2"} py-2 px-2 rounded hover:text-blue-600 ${
          isActive ? "text-blue-600 font-bold bg-blue-50" : "text-[#5E6E82]"
        }`
      }
    >
      {icon} {!collapsed && label}
    </NavLink>
  );

  const renderSubMenuItem = (to, label) => (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `block py-1 px-2 rounded hover:text-blue-600 ${
            isActive ? "text-blue-600 font-bold bg-blue-50" : "text-[#5E6E82]"
          }`
        }
      >
        {label}
      </NavLink>
    </li>
  );

  const renderToggleMenu = (menuKey, icon, label, subItems) => (
    <div>
      <button
        onClick={() => toggleMenu(menuKey)}
        className={`flex items-center w-full font-semibold py-2 rounded hover:bg-blue-50 ${
          collapsed ? "justify-center" : "justify-between"
        }`}
      >
        <span className={`flex items-center ${collapsed ? "" : "gap-2"}`}>
          {icon} {!collapsed && label}
        </span>
        {!collapsed &&
          (openMenus.includes(menuKey) ? (
            <ChevronDown size={16} />
          ) : (
            <ChevronRight size={16} />
          ))}
      </button>
      {!collapsed && openMenus.includes(menuKey) && (
        <ul className="ml-6 mt-1 space-y-1">{subItems}</ul>
      )}
    </div>
  );

  return (
    <div
      className={`h-screen p-4 overflow-y-auto scrollbar-hide text-[#5E6E82] transition-all duration-300  ${
        collapsed ? "w-20" : "w-64"
      }`}
    >
      {/* Dashboard */}
      {renderToggleMenu("dashboard", <LayoutDashboard size={18} />, "Dashboard", [
        renderSubMenuItem("/dashboardDefault", "Default"),
        renderSubMenuItem("/analytics", "Analytics"),
        renderSubMenuItem("analyticsCRM", "CRM"),
        renderSubMenuItem("/lottery", "E Commerce"),
        renderSubMenuItem(
          "/dashboard/lms",
          <>
            LMS{" "}
            <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full">
              New
            </span>
          </>
        ),
        renderSubMenuItem("/blur", "Management"),
        renderSubMenuItem("/tree", "SaaS"),
        renderSubMenuItem("/dashboard/support", "Support Desk"),
      ])}

      {/* Calendar */}
      <div className="mt-4">{renderMenuItem(<Calendar size={18} />, "Calendar", "/calendar")}</div>

      {/* Chat */}
      <div className="mt-2">{renderMenuItem(<MessageSquare size={18} />, "Chat", "/chatting")}</div>

      {/* Email */}
      {renderToggleMenu("email", <Mail size={18} />, "Email", [
        renderSubMenuItem("/chatbox", "Inbox"),
        renderSubMenuItem("/email/detail", "Email detail"),
        renderSubMenuItem("/compose", "Compose"),
      ])}

      {/* Events */}
      {renderToggleMenu("events", <Calendar size={18} />, "Events", [
        renderSubMenuItem("/event", "Upcoming"),
        renderSubMenuItem("/event", "Past"),
      ])}

      {/* E-Commerce */}
      {renderToggleMenu("ecommerce", <ShoppingCart size={18} />, "E Commerce", [
        <li className="font-bold mt-2 text-[#5E6E82]">Product</li>,
        renderSubMenuItem("/addproduct", "Add a product"),
        renderSubMenuItem("/productlist", "Product list"),
        renderSubMenuItem("/ecommerce/product/grid", "Product grid"),
        renderSubMenuItem("/ecommerce/product/details", "Product details"),
        <li className="font-bold mt-2 text-[#5E6E82]">Orders</li>,
        renderSubMenuItem("/orderlist", "Customers"),
        renderSubMenuItem("/ecommerce/orders/customer-details", "Customer details"),
        renderSubMenuItem("/shoppingCart", "Shopping cart"),
        renderSubMenuItem("/ecommerce/orders/checkout", "Checkout"),
        renderSubMenuItem("/billing", "Billing"),
        renderSubMenuItem("/invoice", "Invoice"),
      ])}

      {/* E-Learning */}
      {renderToggleMenu("elearning", <GraduationCap size={18} />, "E Learning", [
        renderSubMenuItem("/elearning/course", "Course"),
        renderSubMenuItem("/elearning/student-overview", "Student overview"),
        renderSubMenuItem("/elearning/trainer-profile", "Trainer profile"),
      ])}

      {/* Kanban */}
      <div className="mt-2">{renderMenuItem(<Layout size={18} />, "Kanban", "/kanban")}</div>

      {/* Social */}
      {renderToggleMenu("social", <Share2 size={18} />, "Social", [
        renderSubMenuItem("/feed", "Feed"),
        renderSubMenuItem("/social/activity", "Activity log"),
        renderSubMenuItem("/social/notifications", "Notifications"),
        renderSubMenuItem("/followers", "Followers"),
      ])}

      {/* Support Desk */}
      {renderToggleMenu("support", <LifeBuoy size={18} />, "Support Desk", [
        renderSubMenuItem("/support/table", "Table view"),
        renderSubMenuItem("/support/card", "Card view"),
        renderSubMenuItem("/support/contacts", "Contacts"),
        renderSubMenuItem("/support/contact-details", "Contact details"),
        renderSubMenuItem("/support/tickets", "Tickets preview"),
        renderSubMenuItem("/support/quick-links", "Quick links"),
        renderSubMenuItem("/support/reports", "Reports"),
      ])}

      {/* Pages */}
      {!collapsed && (
        <div className="mt-4 mb-2 text-xs uppercase tracking-wide font-semibold text-[#5E6E82]">
          Pages
        </div>
      )}
      <div className="mt-2">
        {renderMenuItem(<Flag size={18} />, "Starter", "/pages/starter")}
        {renderMenuItem(<Globe size={18} />, "Landing", "/pages/landing")}
      </div>

      {/* Authentication */}
      {renderToggleMenu("auth", <Lock size={18} />, "Authentication", [
        <li className="font-bold mt-1 text-[#5E6E82]">Simple</li>,
        renderSubMenuItem("/auth/simple/login", "Login"),
        renderSubMenuItem("/auth/simple/logout", "Logout"),
        renderSubMenuItem("/auth/simple/register", "Register"),
        renderSubMenuItem("/auth/simple/forgot", "Forgot password"),
        renderSubMenuItem("/auth/simple/confirm", "Confirm mail"),
        renderSubMenuItem("/auth/simple/reset", "Reset password"),
        renderSubMenuItem("/auth/simple/lock", "Lock screen"),
        <li className="font-bold mt-1 text-[#5E6E82]">Card</li>,
        renderSubMenuItem("/auth/card/login", "Login"),
        renderSubMenuItem("/auth/card/logout", "Logout"),
        renderSubMenuItem("/auth/card/register", "Register"),
        renderSubMenuItem("/auth/card/forgot", "Forgot password"),
        renderSubMenuItem("/auth/card/confirm", "Confirm mail"),
        renderSubMenuItem("/auth/card/reset", "Reset password"),
        renderSubMenuItem("/auth/card/lock", "Lock screen"),
        renderSubMenuItem("/auth/split/lock", "Lock screen"),
      ])}

      {/* User */}
      {renderToggleMenu("user", <User size={18} />, "User", [
        renderSubMenuItem("/user/profile", "Profile"),
        renderSubMenuItem("/user/settings", "Settings"),
        renderSubMenuItem("/user/notifications", "Notifications"),
      ])}

      {/* Pricing */}
      <div className="mt-2">{renderMenuItem(<DollarSign size={18} />, "Pricing", "/pricing")}</div>

      {/* FAQ */}
      <div className="mt-2">{renderMenuItem(<HelpCircle size={18} />, "FAQ", "/faq")}</div>

      {/* Errors */}
      {renderToggleMenu("errors", <AlertTriangle size={18} />, "Errors", [
        renderSubMenuItem("/errors/404", "404"),
        renderSubMenuItem("/errors/500", "500"),
        renderSubMenuItem("/errors/maintenance", "Maintenance"),
      ])}

      {/* Miscellaneous */}
      {renderToggleMenu("misc", <MoreHorizontal size={18} />, "Miscellaneous", [
        renderSubMenuItem("/misc/timeline", "Timeline"),
        renderSubMenuItem("/misc/invoice", "Invoice"),
        renderSubMenuItem("/misc/activity", "Activity"),
      ])}

      {/* Layouts */}
      {renderToggleMenu("layouts", <Grid size={18} />, "Layouts", [
        renderSubMenuItem("/layouts/vertical", "Vertical"),
        renderSubMenuItem("/layouts/horizontal", "Horizontal"),
        renderSubMenuItem("/layouts/fluid", "Fluid"),
        renderSubMenuItem("/layouts/boxed", "Boxed"),
      ])}
    </div>
  );
};

export default LeftSide;
