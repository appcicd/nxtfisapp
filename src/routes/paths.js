// ----------------------------------------------------------------------

function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOTS_AUTH = '/auth';
const ROOTS_DASHBOARD = '/dashboard';

// ----------------------------------------------------------------------

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, '/login'),
};

export const PATH_PAGE = {
  page404: '/404',
};

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  view: {
    summary: path(ROOTS_DASHBOARD, '/summary'),
    upload: path(ROOTS_DASHBOARD, '/upload'),
    download: path(ROOTS_DASHBOARD, '/download'),
    fileslist: path(ROOTS_DASHBOARD, '/fileslist'),
  },
};

