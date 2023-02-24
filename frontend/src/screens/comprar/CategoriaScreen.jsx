import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import StyledView from '../../styledComponents/StyledView';
import { Image, ScrollView } from 'react-native';
import StyledTextInput from '../../styledComponents/StyledTextInput';
import { ProductCard } from '../../components/ProductCard';
import Search from '../../components/icons/Search';

export const CategoriaScreen = () => {
    const navigator = useNavigation();

    return (
        <StyledView dark height100>
            <ScrollView>
                <StyledView container>
                    <StyledView row marginTop={10}>
                        <StyledTextInput style={{ borderWidth: 0, opacity: 1, flexGrow: 1 }}>
                            Buscador
                        </StyledTextInput>
                        <Search
                            style={{
                                position: 'absolute',
                                alignSelf: 'center',
                                right: 15,
                            }}
                        />
                    </StyledView>
                    <StyledView row center marginTop={20} flexWrap={'wrap'}>
                        <ProductCard
                            img={'https://picsum.photos/id/1/162/192'}
                            title={'Zapatilla'}
                            price={'10000'}
                            margin={6}
                        />
                        <ProductCard
                            img={'https://picsum.photos/id/1/162/192'}
                            title={'Remera'}
                            price={'8000'}
                        />
                        <ProductCard
                            img={'https://picsum.photos/id/1/162/192'}
                            title={'Camisa'}
                            price={'12000'}
                        />
                    </StyledView>
                </StyledView>
            </ScrollView>
        </StyledView>
    );
};
