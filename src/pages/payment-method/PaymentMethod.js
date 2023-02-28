import { CategoryTable } from "../../components/category-forms/CategoryTable";
import { AddNewPaymentMethodForm } from "../../components/payment-method-forms/AddNewPaymentMethodForm";
import { AdminLayout } from "../layout/AdminLayout";

const PaymentMethod = () => {
  return (
    <AdminLayout>
      <div className="mt-3">
        <h3>Payment Methods</h3>
        <hr />
      </div>
      {/* form */}
      <AddNewPaymentMethodForm />

      {/* table */}
      <CategoryTable />
    </AdminLayout>
  );
};
export default PaymentMethod;
