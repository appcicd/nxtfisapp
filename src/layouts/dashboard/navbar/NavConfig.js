// routes
import { PATH_DASHBOARD } from '../../../routes/paths';

// components
//import Label from '../../../components/Label';
import SvgIconStyle from '../../../components/SvgIconStyle';

// ----------------------------------------------------------------------

const getIcon = (name) => <SvgIconStyle src={`/icons/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const ICONS = {

  user: getIcon('ic_user'),
  dashboard: getIcon('dashboard'),
  upload: getIcon('cloud_upload'),
  download: getIcon('cloud_download'),
  list: getIcon('list'),

};

const navConfig = [
  // DASHBOARD
  // ----------------------------------------------------------------------
  {
    subheader: 'dashboard',
    items: [
      { title: 'summary', path: PATH_DASHBOARD.view.summary, icon: ICONS.dashboard },
      { title: 'upload', path: PATH_DASHBOARD.view.upload, icon: ICONS.upload },  
      { title: 'download', path: PATH_DASHBOARD.view.download, icon: ICONS.download },
      { title: 'Files List', path: PATH_DASHBOARD.view.fileslist, icon: ICONS.list },
    ],
  },
];

export default navConfig;
