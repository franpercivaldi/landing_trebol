import { useEffect, useState } from "react";
import { Button, Col, Form, Input, InputNumber, Modal, Row, Select, Switch } from "antd";
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
    { name: "gnc", label: "¿Tiene GNC?", type: "switch", required: true },
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
  monopatin: [
    { name: "fullName", label: "Nombre y apellido", type: "text", required: true },
    { name: "phone", label: "Teléfono", type: "text", required: true },
    { name: "zip", label: "Código postal", type: "text", required: true },
    { name: "marca", label: "Marca", type: "text", required: true },
    { name: "modelo", label: "Modelo", type: "text", required: true },
    { name: "anio", label: "Año", type: "number", required: true },
  ],
};

const QuoteForm = ({ visible, serviceType, descriptions = {}, onClose, onSubmit }) => {
  const [form] = Form.useForm();
  const [showForm, setShowForm] = useState(false);
  const fields = formConfigs[serviceType] || [];
  const infoText = descriptions[serviceType] || "";

  useEffect(() => {
    // Reset to info view when modal is opened
    if (visible) {
      setShowForm(false);
      form.resetFields();
    }
  }, [visible, form]);

  const handleStart = () => {
    setShowForm(true);
  };

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        onSubmit(values);
        handleClose();
      })
      .catch((info) => console.log("Validate Failed:", info));
  };

  const handleClose = () => {
    form.resetFields();
    setShowForm(false);
    onClose();
  };

  const footerButtons = showForm
    ? [
        <Button key="cancel" onClick={handleClose}>
          Cancelar
        </Button>,
        <Button key="submit" type="primary" onClick={handleOk}>
          Enviar
        </Button>,
      ]
    : [
        <Button key="cancel" onClick={handleClose}>
          Cerrar
        </Button>,
        <Button key="start" type="primary" onClick={handleStart}>
          Solicitar cotización
        </Button>,
      ];

  return (
    <Modal
      title={showForm ? "Solicitar cotización" : "Información del servicio"}
      open={visible}
      onCancel={handleClose}
      footer={footerButtons}
      width={700}
      centered
      closable={false}
    >
      {!showForm ? (
        <div style={{ whiteSpace: "pre-line", maxHeight: "60vh", overflowY: "auto" }}>{infoText}</div>
      ) : (
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
                case "switch":
                  inputNode = <Switch checkedChildren="Si" unCheckedChildren="No" />;
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
      )}
    </Modal>
  );
};

export default QuoteForm;
