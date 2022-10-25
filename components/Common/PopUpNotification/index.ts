import { useAppDispatch, useAppSelector } from '@clean/application/redux/hook';
import { hidePopUp } from '@clean/application/redux/popUpNotifications/popUpNotification.slice';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { useEffect } from 'react';
import Swal from 'sweetalert2';

const PopUpNotifications = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { t } = useTranslation('common');

  const countryDetected = useAppSelector(
    (state: any) => state.Fp.countryDetected
  );

  const { popUpNotificationType, popUpProps, isOpen } = useAppSelector(
    (state) => state.PopUpNotifications
  );

  useEffect(() => {
    try{
      if (isOpen) {
        let iconType: any = '';
        if (popUpNotificationType === 'ERROR') {
          iconType = 'error';
        }
        if (popUpNotificationType === 'SUCCESS') {
          iconType = 'success';
        }
        if (popUpNotificationType === 'WARNING') {
          iconType = 'warning';
        }
        if (popUpNotificationType === 'INFO') {
          iconType = 'info';
        }
        if (popUpNotificationType === 'QUESTION') {
          iconType = 'question';
        }

        if (popUpProps.preConfirm) {
          Swal.fire({
            title: popUpProps.title.includes('componentes.')
              ? t(popUpProps.title)
              : popUpProps.title,
            text: popUpProps.text.includes('componentes.')
              ? t(popUpProps.text)
              : popUpProps.text,
            icon: iconType,
            timer: popUpProps.timer,
            confirmButtonText: popUpProps.confirmButtonText.includes(
              'componentes.'
            )
              ? t(popUpProps.confirmButtonText)
              : popUpProps.confirmButtonText,
            showCancelButton: popUpProps.showCancelButton,
            cancelButtonText: popUpProps.cancelButtonText.includes('componentes.')
              ? t(popUpProps.cancelButtonText)
              : popUpProps.cancelButtonText,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            preConfirm: () => {
              popUpProps.preConfirm(router, countryDetected);
            },
          });
        } else {
          Swal.fire({
            title: popUpProps.title.includes('componentes.')
              ? t(popUpProps.title)
              : popUpProps.title,
            text: popUpProps.text.includes('componentes.')
              ? t(popUpProps.text)
              : popUpProps.text,
            icon: iconType,
            showConfirmButton: true,
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#3085d6',
            timer: popUpProps.timer,
          });
        }
        dispatch(hidePopUp());
      }
    }catch(e){
      console.log('error in component',e)
    }
  }, [popUpNotificationType, popUpProps, isOpen]);

  return null;
};

export default PopUpNotifications;
