import {StyleSheet} from 'react-native';
import {THEME} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 16,
  },
  label: {
    fontSize: 17,
    fontWeight: 'bold',
    color: THEME.COLORS.CAPTION_300,
    fontFamily: 'Roboto Bold',
    marginBottom: 2,
  },
  value: {
    color: THEME.COLORS.CAPTION_300,
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.BOLD,
  },
});
