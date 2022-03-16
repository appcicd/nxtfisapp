// routes
import { PATH_AUTH, PATH_PAGE } from '../../routes/paths';
// components
import { PATH_AFTER_LOGIN } from '../../config';
// components
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const ICON_SIZE = {
  width: 22,
  height: 22,
};

const menuConfig = [
  {
    title: 'Home',
    icon: <Iconify icon={'eva:home-fill'} {...ICON_SIZE} />,
    path: '/dashboard',
  },
  {
    title: 'Components',
    icon: <Iconify icon={'ic:round-grain'} {...ICON_SIZE} />,
    path: PATH_PAGE.components,
  },
  {
    title: 'Pages',
    path: '/pages',
    icon: <Iconify icon={'eva:file-fill'} {...ICON_SIZE} />,
    children: [
      {
        subheader: 'Other',
        items: [
          { title: 'Download', path: PATH_PAGE.download },
          { title: 'Upload', path: PATH_PAGE.upload },
        ],
      },
      {
        subheader: 'Authentication',
        items: [
          { title: 'Login', path: PATH_AUTH.loginUnprotected },
        ],
      },
      {
        subheader: 'Error',
        items: [
          { title: 'Page 404', path: PATH_PAGE.page404 },
        ],
      },
      {
        subheader: 'Dashboard',
        items: [{ title: 'Dashboard', path: PATH_AFTER_LOGIN }],
      },
    ],
  },
];

export default menuConfig;
