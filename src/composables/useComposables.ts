import {computed} from 'vue'
import {useThemeStore} from '../store/useThemeStore'


export function useThemeComposable():boolean{
  const theme = useThemeStore();
  let status = computed<boolean>(()=>{ return theme.get_theme_status})
  return status.value
}