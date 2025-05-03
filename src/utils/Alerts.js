import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const CustomSwal = withReactContent(Swal)

export const alertLikeError = () => {
    CustomSwal.fire({
        title: "Talvez você já tenha curtido isso",
        text: "Verifique se você já não curtiu o post ou se ele ainda existe",
        icon: "question"
    });
}

export const alertLikePost = () => {
    CustomSwal.fire({
        title: "Post curtido com sucesso!",
        text: "Você curtiu o post com sucesso.",
        icon: "success",
        showCancelButton: false,
        showConfirmButton: false,
        confirmButtonText: "Ok",
        toast: true,
        position: "top-end",
        timer: 1500,
        timerProgressBar: true,
    });
}

export const alertExpireToken = () => {
    CustomSwal.fire({
        title: "Sessão expirada",
        text: "Sua sessão expirou. Você será redirecionado para a página de login.",
        icon: "warning",
        showCancelButton: false,
        showConfirmButton: false,
        confirmButtonText: "Ok",
        toast: true,
        position: "top-end",
        timer: 2000,
        timerProgressBar: true,
    });
    setTimeout(() => {
        window.location.href = "/login";
    }, 2000);
}

export const alertUnlikePost = () => {
    CustomSwal.fire({
        title: "Post descurtido com sucesso!",
        text: "Você descurtiu o post com sucesso.",
        icon: "success",
        showCancelButton: false,
        showConfirmButton: false,
        confirmButtonText: "Ok",
        toast: true,
        position: "top-end",
        timer: 1500,
        timerProgressBar: true,
    });
}