import axios from 'axios';
import { useState } from 'react';
import { Box, Typography, Divider, Avatar, List, ListItem, ListItemText, Alert } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useDropzone } from 'react-dropzone';
import Uploady, { useRequestPreSend, useItemProgressListener } from '@rpldy/uploady';
import UploadDropZone from '@rpldy/upload-drop-zone';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

import SvgIconStyle from '../SvgIconStyle';

// ----------------------------------------------------------------------

const getIcon = (name) => <SvgIconStyle src={`/icons/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const ICONS = {
upload: getIcon('cloud_upload'),
close: getIcon('close'),
check: getIcon('check'),
};

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 5,
    borderRadius: 2,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 50 : 800]
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 2,
        backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8'
    }
}));

const BoxUploadWrapper = styled(Box)(
    ({ theme }) => `
    border-radius: 20px;
    padding: ${theme.spacing(2)};
    margin-top: ${theme.spacing(2)};
    background: ${theme.palette.primary[200]};
    border: 1px dashed ${theme.palette.primary.dark};
    outline: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: ${theme.transitions.create(['border', 'background'])};

    &:hover {
      background: ${theme.palette.light};
      border-color: ${theme.palette.blue};
    }
`
);

const UploadBox = styled(Box)(
    ({ theme }) => `
    border-radius: 27px;
    padding: ${theme.spacing(2)};
    background: ${theme.palette.light};
`
);

const TypographyPrimary = styled(Typography)(
    ({ theme }) => `
    color: ${theme.palette.light};
  `
);

const TypographySecondary = styled(Typography)(
    ({ theme }) => `
    color: ${theme.palette.light};
  `
);

const DividerContrast = styled(Divider)(
    ({ theme }) => `
    background: ${theme.palette.light};
  `
);

const AvatarWrapper = styled(Avatar)(
    ({ theme }) => `
    background: ${theme.palette.light};
    width: ${theme.spacing(7)};
    height: ${theme.spacing(7)};
`
);

const AvatarSuccess = styled(Avatar)(
    ({ theme }) => `
    background: ${theme.palette.success.light};
    width: ${theme.spacing(7)};
    height: ${theme.spacing(7)};
`
);

const AvatarDanger = styled(Avatar)(
    ({ theme }) => `
    background: ${theme.palette.error.light};
    width: ${theme.spacing(7)};
    height: ${theme.spacing(7)};
`
);

const ProgressBar = () => {
    const [progress, setProgess] = useState(0);
    const progressData = useItemProgressListener();

    if (progressData && progressData.completed > progress) {
        setProgess(() => progressData.completed);
    }

    return (
        // <Box sx={{ width: '100%' }}>
        //     <BorderLinearProgress variant="determinate" value={progress} />
        // </Box>

        progress > 0 && (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ width: '80%', mr: 1 }}>
                    <BorderLinearProgress variant="determinate" value={progress} />
                </Box>
                <Box sx={{ minWidth: 35 }}>
                    <Typography variant="body2" color="text.secondary">{`${Math.round(progress)}%`}</Typography>
                </Box>
            </Box>
        )
    );
};

const FileManager = () => {
    useRequestPreSend(async ({ items }) => {
        const files = items.length > 0 ? items[0] : {};
        console.log('files: ', files);
        const { file } = files;
        console.log('file: ', file);
        const { name, type } = file;
        console.log('name: ', name);
        console.log('type: ', type);
        //const apiGW = `${process.env.REACT_APP_ENDPOINT}/upload`;
        const apiGW = 'https://xmqttuuplj.execute-api.us-west-2.amazonaws.com/DEV/presigned-url/';
        console.log('apiGW : ', apiGW);

        const response = await axios(
            `${apiGW}?${new URLSearchParams({
                name,
                type
            })}`,
            cors
        );
        const { data } = response;
        // console.log('percentCompleted: ', data.onUploadProgress.percentCompleted);
        const uploadUrl = data.upload_url;
        // const progress = data.onUploadProgress;

        return {
            options: {
                sendWithFormData: false,

                destination: {
                    url: uploadUrl,
                    method: 'PUT',
                    headers: {
                        'Content-Type': type
                    }
                }
            }
        };
    });

    const { acceptedFiles, isDragActive, isDragAccept, isDragReject, getRootProps, getInputProps } = useDropzone({
        accept: 'text/plain, text/csv, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/pdf'
    });

    const files = acceptedFiles.map((file, index) => (
        <ListItem disableGutters component="div" key={index}>
            <ListItemText primary={file.name} />
            <b>{file.size} bytes</b>
            <DividerContrast />
        </ListItem>
    ));

    return (
        <Box>
            <Box sx={{ p: { xs: 2, lg: 4 } }}>
                <TypographyPrimary variant="h5" gutterBottom>
                    Upload Files
                </TypographyPrimary>
                <TypographySecondary variant="body2" gutterBottom>
                    The following file types are supported: txt, csv, excel, doc and pdf.
                </TypographySecondary>
                <DividerContrast sx={{ my: 1 }} />

                <UploadBox>
                    <BoxUploadWrapper {...getRootProps()}>
                        <input {...getInputProps()} />
                        {isDragAccept && (
                            <>
                                <UploadDropZone onDragOverClassName="drag-over">
                                    <AvatarSuccess variant="rounded">
                                        {ICONS.check}
                                    </AvatarSuccess>
                                    <TypographyPrimary sx={{ mt: 2 }}>Drop the files to start uploading</TypographyPrimary>
                                </UploadDropZone>
                            </>
                        )}
                        {isDragReject && (
                            <>
                                <AvatarDanger variant="rounded">
                                    {ICONS.close}
                                </AvatarDanger>
                                <TypographyPrimary sx={{ mt: 2 }}>You cannot upload these file types</TypographyPrimary>
                            </>
                        )}
                        {!isDragActive && (
                            <>
                                <AvatarWrapper variant="rounded" >
                                    {ICONS.upload}
                                </AvatarWrapper>
                                <TypographyPrimary sx={{ mt: 2 }}>Drag and drop files here</TypographyPrimary>
                            </>
                        )}
                    </BoxUploadWrapper>
                    {files.length > 0 && (
                        <>
                            <Alert sx={{ py: 0, mt: 2 }} severity="success">
                                You have uploaded <b>{files.length}</b>files
                            </Alert>
                            <DividerContrast sx={{ mt: 2 }} />
                            <List disablePadding component="div">
                                {files}
                            </List>
                        </>
                    )}
                </UploadBox>
            </Box>
        </Box>
    );
};

export default function FileManagerUploader() {
    return (
        <div className="upload-container">
            <Uploady destination={{}}>
                <FileManager />
                <ProgressBar />
            </Uploady>
        </div>
    );
}
