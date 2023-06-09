import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { addOrUpdateToCart, removeFromCart, getCart } from '../api/firebase';
import { useUserContext } from '../context/UserContext';

export default function useCart() {
  const { uid } = useUserContext();
  const queryClient = useQueryClient();
  const cartQuery = useQuery(['carts', uid || ''], () => getCart(uid), {
    enabled: !!uid,
  });
  const addOrUpdateItem = useMutation(
    (product) => addOrUpdateToCart(uid, product),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['carts', uid]);
      },
    }
  );
  const removeItem = useMutation((id) => removeFromCart(uid, id), {
    onSuccess: () => {
      queryClient.invalidateQueries(['carts', uid]);
    },
  });
  return { cartQuery, addOrUpdateItem, removeItem };
}
