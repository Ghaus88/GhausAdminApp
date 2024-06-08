import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import ViewListRoundedIcon from '@mui/icons-material/ViewListRounded';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">GhausAdmin</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icons" />
            <span>Dashboard</span>
          </li>
          <p className="title">USERS</p>
          <li>
            <PersonOutlinedIcon className="icons" />
            <span>Users</span>
          </li>
          <li>
            <Inventory2OutlinedIcon className="icons" />
            <span>Products</span>
          </li>
          <li>
            <ViewListRoundedIcon className="icons" />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingOutlinedIcon className="icons" />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <QueryStatsIcon className="icons" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsIcon className="icons" />
            <span>Notifcations</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icons" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icons" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icons" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icons" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon className="icons" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
