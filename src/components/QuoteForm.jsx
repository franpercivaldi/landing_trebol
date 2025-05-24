import { Col, Form, Input, InputNumber, Modal, Row, Select } from "antd";
const { Option } = Select;

// TODO: mandar esto a un archivo dentro /data -> schema.js ?
const formConfigs = {
  vehiculo: [
    { name: "fullName", label: "Nombre y apellido", type: "text", required: true },
    { name: "phone", label: "Teléfono", type: "text", required: true },
    { name: "zip", label: "Código postal", type: "text", required: true },
    { name: "marca", label: "Marca", type: "text", required: true },
    { name: "modelo", label: "Modelo", type: "text", required: true },
    { name: "anio", label: "Año", type: "number", required: true },
    { name: "gnc", label: "¿Tiene GNC?", type: "select", options: ["SI", "NO"], required: true },
  ],
  moto: [
    { name: "fullName", label: "Nombre y apellido", type: "text", required: true },
    { name: "phone", label: "Teléfono", type: "text", required: true },
    { name: "zip", label: "Código postal", type: "text", required: true },
    { name: "marca", label: "Marca", type: "text", required: true },
    { name: "modelo", label: "Modelo", type: "text", required: true },
    { name: "anio", label: "Año", type: "number", required: true },
  ],
  bici: [
    { name: "fullName", label: "Nombre y apellido", type: "text", required: true },
    { name: "phone", label: "Teléfono", type: "text", required: true },
    { name: "zip", label: "Código postal", type: "text", required: true },
    { name: "marca", label: "Marca", type: "text", required: true },
    { name: "modelo", label: "Modelo", type: "text", required: true },
    { name: "valor", label: "Valor de la bicicleta", type: "number", required: true },
  ],
  inmueble: [
    { name: "fullName", label: "Nombre y apellido", type: "text", required: true },
    { name: "email", label: "Email", type: "text", required: true },
    { name: "phone", label: "Teléfono", type: "text", required: false },
    { name: "comment", label: "Comentario", type: "textarea", required: false },
  ],
};

const QuoteForm = ({ visible, serviceType, onClose, onSubmit }) => {
  const [form] = Form.useForm();
  const fields = formConfigs[serviceType] || [];

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        onSubmit(values);
        form.resetFields();
        onClose();
      })
      .catch((info) => console.log("Validate Failed:", info));
  };

  const handleCancel = () => {
    form.resetFields();
    onClose();
  };

  return (
    <Modal
      title="Solicitar cotización"
      open={visible}
      onOk={handleOk}
      onCancel={handleCancel}
      okText="Enviar"
      cancelText="Cancelar"
      closable={false}
      width={700}
      centered
    >
      <Form form={form} layout="vertical">
        <Row gutter={16}>
          {fields.map((field) => {
            const colSpan = field.type === "textarea" ? 24 : 12;
            let inputNode;
            switch (field.type) {
              case "select":
                inputNode = (
                  <Select placeholder="Seleccione">
                    {field.options.map((opt) => (
                      <Option key={opt} value={opt}>
                        {opt}
                      </Option>
                    ))}
                  </Select>
                );
                break;
              case "textarea":
                inputNode = <Input.TextArea rows={4} />;
                break;
              case "number":
                inputNode = <InputNumber style={{ width: "100%" }} />;
                break;
              default:
                inputNode = <Input />;
            }

            return (
              <Col span={colSpan} key={field.name}>
                <Form.Item
                  name={field.name}
                  label={field.label}
                  rules={[{ required: field.required, message: `${field.label} es requerido` }]}
                >
                  {inputNode}
                </Form.Item>
              </Col>
            );
          })}
        </Row>
      </Form>
    </Modal>
  );
};

export default QuoteForm;
