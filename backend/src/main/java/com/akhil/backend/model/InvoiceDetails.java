package com.akhil.backend.model;

import lombok.Data;

@Data
public class InvoiceDetails {
    private String number;
    private String date;
    private String dueDate;
}
